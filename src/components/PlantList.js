import React from "react";
import PlantCard from "./PlantCard";
import { useEffect} from "react";

function PlantList({plants, setPlants, search}) {
  /////// Fetching plants using useEffect with a empty array to avoid infinite loop /////////
useEffect(()=> {
fetch('http://localhost:6001/plants')
.then(response => response.json())
.then(data => {
setPlants(data)

})
},[])
/////////////// creating a filter for my search bar with search state passed as a prop ///////
const searchPlants = plants.filter(plant => {
if (search === ''){
return true
}
else {
return plant.name.toLowerCase().includes(search.toLowerCase())
}
})
////////////////// rendering PlantCard component using filtered array ///////////////
const plantsArray = searchPlants.map(plant => {
  return < PlantCard key = {plant.id} plantName = {plant.name} plantImage = {plant.image} plantPrice = {plant.price}/>
})

return (
    <ul className="cards">{plantsArray}</ul>
  );
}

export default PlantList;
