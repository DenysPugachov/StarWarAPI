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

//composition f(g(x))
const withChildFunction = (Wrapper, fn) => {
  return (props) => {
    return (
      <Wrapper { ...props }>
        { fn }
      </Wrapper >
    );
  };
};

const renderName = ({ name }) => <span>{ name }</span>;

const PersonList = withDataHOC(
  withChildFunction(ItemList, renderName),
  getAllPeople);

const StarshipsList = withDataHOC(
  withChildFunction(ItemList, renderName),
  getAllStarships);

const PlanetList = withDataHOC(
  withChildFunction(ItemList, renderName),
  getAllPlanets);

export {
  PersonList,
  StarshipsList,
  PlanetList
};