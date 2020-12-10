import React, { Component } from "react";
import Row from "../row-container/row-container";
import {  StarshipDetails, StarshipsList } from "../sw-components";


export default class StarshipPage extends Component {

  state = {
    selectedId: 1,
  };

  onItemSelected = selectedId => {
    this.setState({ selectedId });
  };

  render() {
    return (
      <Row
        left={ <StarshipsList onItemSelected={ this.onItemSelected } /> }
        right={ <StarshipDetails itemId={ this.state.selectedId } /> }
      />

    );
  }
}
