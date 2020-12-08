import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";


const PersonDetails = () => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPerson, getImgPerson }) => {
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
        }
      }
    </SwapiServiceConsumer>
  );
};

export default PersonDetails;