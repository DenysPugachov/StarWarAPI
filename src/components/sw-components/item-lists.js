import React from "react";
import withDataHOC from "../hoc-helper/with-data-hoc";
import ItemList from "../item-list/item-list";
import { withSwapiService } from "../hoc-helper";;

//composition f(g(x))
const withChildFunction = (Wrapper, fn) => {
  return (props) => {
    return (
      <Wrapper { ...props }>
        { fn }
      </ Wrapper>
    );
  };
};

const mapPersonMethodsToProps = swapiService => {
  return { getData: swapiService.getAllPeople };
};

const mapStarshipMethodsToProps = swapiService => {
  return { getData: swapiService.getAllStarships };
};

const mapPlanetMethodsToProps = swapiService => {
  return { getData: swapiService.getAllPlanets };
};

const renderName = ({ name }) => <span>{ name }</span>;

const PersonList = withSwapiService(
  withDataHOC(withChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps);

const StarshipsList = withSwapiService(
  withDataHOC(withChildFunction(ItemList, renderName)),
  mapStarshipMethodsToProps);

const PlanetList = withSwapiService(
  withDataHOC(withChildFunction(ItemList, renderName)),
  mapPlanetMethodsToProps);


export {
  PersonList,
  StarshipsList,
  PlanetList
};