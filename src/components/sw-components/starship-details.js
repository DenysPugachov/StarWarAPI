import React from "react";
import { withSwapiService } from "../hoc-helper";
import ItemDetails, { Record } from "../item-details/item-details";

const StarshipDetails = props => {
  return (
    <ItemDetails { ...props } >
      <Record field="model" label="model: " />
      <Record field="manufacture" label="manufacture: " />
      <Record field="costInCredits" label="costInCredits: " />
      <Record field="length" label="length: " />
      <Record field="crew" label="crew: " />
      <Record field="passengers" label="passengers: " />
      <Record field="cargoCapacity" label="cargoCapacity: " />
    </ItemDetails>
  );
};

const mapMethodToProps = swapiService => {
  return {
    getData: swapiService.getStarship,
    getImg: swapiService.getImgStarship,
  };
};

export default withSwapiService(StarshipDetails, mapMethodToProps);