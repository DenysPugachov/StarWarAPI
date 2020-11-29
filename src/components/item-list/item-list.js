import React from "react";
import SwapiService from "../../service/swapi-services";
import withDataHOC from "../hoc-helper/with-data-hoc";

const ItemList = (props) => {
  const { onItemSelected, children, data } = props;

  const items = data.map(item => {
    const { id } = item;
    const label = children(item);
    return (
      <li
        className="list-group-item"
        key={ id }
        onClick={ () => onItemSelected(id)
        }
      > { label }
      </li >);
  });

  return (
    <ul className="list-group" >
      { items }
    </ul>
  );
};

const { getAllPeople } = new SwapiService();

export default withDataHOC(ItemList, getAllPeople);