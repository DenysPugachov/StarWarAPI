import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helper";

const PlanetDetails = props => {
  return (
    <ItemDetails { ...props }>
      <Record field="name" label="name: " />
      <Record field="population" label="population: " />
      <Record field="rotationPeriod" label="rotationPeriod: " />
      <Record field="diameter" label="diameter: " />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImg: swapiService.getImgPlanet,
  };
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);