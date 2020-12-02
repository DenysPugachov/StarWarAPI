import React from "react";
import SwapiService from "../../service/swapi-services";
import withDataHOC from "../hoc-helper/with-data-hoc";
import ItemList from "../item-list/item-list";


const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllStarships,
  getAllPlanets,
} = swapiService;

const PersonList = withDataHOC(ItemList, getAllPeople);
const StarshipsList = withDataHOC(ItemList, getAllStarships);
const PlanetList = withDataHOC(ItemList, getAllPlanets);

export {
  PersonList,
  StarshipsList,
  PlanetList
};