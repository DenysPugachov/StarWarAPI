import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";

const StarshipDetails = () => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getStarship, getImgStarship }) => {
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
        }
      }
    </SwapiServiceConsumer>
  );
};

export default StarshipDetails;