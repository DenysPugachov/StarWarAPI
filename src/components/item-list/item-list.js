import React, { Component } from "react";
import Spinner from "../spinner";

export default class ItemList extends Component {

  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then(itemList => {
        this.setState({ itemList });
      });
  }

  renderItem(arr) {
    return arr.map(item => {

      const { id } = item;
      const label = this.props.children(item);

      return (
        <li
          className="list-group-item"
          key={ id }
          onClick={ () => this.props.onItemSelected(id)
          }
        > { label }
        </li >);
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return (
        <ul className="card w-50 m-auto" >
          <Spinner />
        </ul>
      );
    }

    const items = this.renderItem(itemList);

    return (
      <ul className="list-group" >
        { items }
      </ul>
    );
  }
};