import React from "react";
import { withSwapiService } from "../hoc-helper";
import ItemDetails, { Record } from "../item-details/item-details";

const PersonDetails = props => {

  return (
    <ItemDetails { ...props } >
      <Record field="gender" label="Gender: " />
      <Record field="eyeColor" label="Eye color: " />
    </ItemDetails >
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImg: swapiService.getImgPerson,
  };
};

export default withSwapiService(PersonDetails, mapMethodsToProps);