import "./styles.css";
import Header from "./Header";
import Card from "./Card";
import { useState, useEffect } from "react";

export default function App() {
  const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";
  // for (let i = 0; i < 12; i++) {
  //   x = [...x, fetchUrl()];
  // }
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const fetchItems = async () => {
    try {
      let response = await fetch(API_URL);
      if (!response.ok) throw Error("did not receive expected data");
      let listItems = await response.json();
      // 1 title, 2 image, 3 instructions
      setError(null);
      return [
        listItems.meals[0].strMeal,
        listItems.meals[0].strMealThumb,
        listItems.meals[0].strInstructions
      ];
    } catch (err) {
      setError(err.message);
    } // finally {

    // }
  };
  useEffect(() => {
    let arr = [];

    for (let i = 0; i < 12; i++) {
      arr = [...arr, fetchItems()];
    }
    setMeals(arr);
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="container">
        <menu className="grid">
          {meals.map((title) => (
            <Card title={title} />
          ))}
        </menu>
      </main>
    </div>
  );
}
