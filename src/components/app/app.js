import React from "react";
import Nav from "../nav/nav";
import RandomPlanet from "../random-planet/random-planet";
import PersonDetails from "../person-details/person-details";
import ItemList from "../item-list/item-list";

export default function App() {
  return (
    <div className="container">
      <Nav />
      <RandomPlanet />
      <ItemList />
      <PersonDetails />
    </div>
  );
}