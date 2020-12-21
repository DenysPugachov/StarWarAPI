import React, { Component } from "react";
import Row from "../row-container/row-container";
import { PlanetDetails, PlanetList } from "../sw-components";


export default class PlanetPage extends Component {

  state = {
    selectedId: null,
  };

  onItemSelected = selectedId => {
    this.setState({ selectedId });
  };

  render() {
    return (
      <Row
        left={ <PlanetList onItemSelected={ this.onItemSelected } /> }
        right={ <PlanetDetails itemId={ this.state.selectedId } /> }
      />

    );
  }
}
