import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";

const PlanetDetails = () => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPlanet, getImgPlanet }) => {
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
        }
      }
    </SwapiServiceConsumer>
  );
};

export default PlanetDetails;