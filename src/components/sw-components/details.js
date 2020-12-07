import React from "react";
import SwapiService from "../../service/swapi-services";
import ItemDetails, { Record } from "../item-details/item-details";

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getImgPlanet,
  getImgPerson,
  getImgStarship
} = swapiService;

const PersonDetails = () => {
  return (
    <ItemDetails
      itemId={ 3 }
      getData={ getPerson }
      getImg={ getImgPerson }
    >
      <Record field="gender" label="Gender: " />
      <Record field="eyeColor" label="Eye color: " />
    </ItemDetails >
  );
};

const StarshipDetails = () => {
  return (
    <ItemDetails
      itemId={ 5 }
      getData={ getStarship }
      getImg={ getImgStarship }
    >
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

const PlanetDetails = () => {
  return (
    <ItemDetails
      itemId={ 5 }
      getData={ getPlanet }
      getImg={ getImgPlanet }
    >
      <Record field="name" label="name: " />
      <Record field="population" label="population: " />
      <Record field="rotationPeriod" label="rotationPeriod: " />
      <Record field="diameter" label="diameter: " />
    </ItemDetails>
  );
};

export {
  PersonDetails,
  StarshipDetails,
  PlanetDetails
};