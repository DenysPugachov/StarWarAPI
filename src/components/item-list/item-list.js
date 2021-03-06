import React from "react";

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
    <ul className="list-group mb-3">
      { items }
    </ul>
  );
};

export default ItemList;