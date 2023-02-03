import React, { useEffect } from "react";
import { useState} from "react";
function NewPlantForm({setPlants, plants}) {

const [inputName, setInputName] = useState('')
const [inputImage, setInputImage] = useState('')
const [inputPrice, setInputPrice] = useState(0)
const [bool, setBool] = useState(false)

function handleSubmit(e){
  e.preventDefault()
  setInputName(e.target.name.value)
  setInputImage(e.target.image.value)
  setInputPrice(e.target.price.value)
  ////////// cant fetch in this function due to rendering issues, state
  // containing the name, image, price values is only updated outside of this function. 
  //// A boolean state is updated when this form is submitted so the fetch 
  ///////can access name, image and price updated state values
  setBool(!bool)
  // console.log(inputName, inputImage, inputPrice)
}
// console.log(inputName, inputImage, inputPrice)
useEffect(()=> {
  //////////the submit button triggers boolean state, it is clicked 
  /// we will fetch and POST our new data
  if (bool !== false){
  fetch('http://localhost:6001/plants', {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": inputName,
      "image": inputImage,
      "price": inputPrice
    })
    })
    .then(response => response.json())
    .then(data => {
      ////////////// this spread operator allows us to add a new plant as soon as 
      /// the submit button is clicked. without this the data will peresist and 
      ///////// post to the database, but you will need to refresh the browser
      ////////////////// in order to see the new plant //////////
      setPlants([...plants, data])
      setBool(!bool)
    })
  }
},[bool])

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
