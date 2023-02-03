import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from "react";

function PlantPage() {
//created state used for fetch and search here becuase child components depends on it///////
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')
  console.log(search)

  return (
    <main>
      <NewPlantForm setPlants = {setPlants} plants = {plants}/>
      <Search search = {search} setSearch = {setSearch} />
      <PlantList plants = {plants} setPlants = {setPlants} search = {search}/>
    </main>
  );
}

export default PlantPage;
