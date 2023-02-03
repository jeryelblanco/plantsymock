import React from "react";
import { useState } from "react";
/// passed plant attributes as props to add name image and price to my plant card ///////////
function PlantCard({plantName, plantImage, plantPrice}) {
  //////////////////// set boolean state to change In stock to out of stock /////////
const [isClicked, setIsClick] = useState(true)
function click(){
setIsClick(!isClicked)
}
  return (
    <li className="card">
      <img src={plantImage} alt={"plant name"} />
      <h4>{plantName}</h4>
      <p>Price: {plantPrice}</p>
      {isClicked? (
        <button onClick = {click} className="primary">In Stock</button>
      ) : (
        <button onClick = {() => {setIsClick(!isClicked)}}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
