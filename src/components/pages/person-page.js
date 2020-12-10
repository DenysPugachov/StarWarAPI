import React, { Component } from "react";
import Row from "../row-container/row-container";
import { PersonDetails, PersonList } from "../sw-components";


export default class PersonPage extends Component {

  state = {
    selectedId: 1,
  };

  onItemSelected = selectedId => {
    this.setState({ selectedId });
  };

  render() {
    return (
      <Row
        left={ <PersonList onItemSelected={ this.onItemSelected } /> }
        right={ <PersonDetails itemId={ this.state.selectedId } /> }
      />

    );
  }
}
