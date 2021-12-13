import {useState} from 'react'
const Card = ({title}) => {
  const [cont, setCont] = useState([])
  title.then(a => {
    setCont(a)
  })

  return (
    <li className="card">
      <img src={cont[1]} className="showImage" alt="food preview" />
      <button className="btn">{cont[0]}</button> 
    </li>
  );
};
export default Card;
