import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

export default class PeoplePage extends Component {

  state = {
    personSelected: 10,
    hasError: false,
  };

  componentDidCatch(error, info) {
    // debugger;
    this.setState({ hasError: true });
  }

  onPersonSelected = id => {
    this.setState({ personSelected: id });
  };

  render() {
    if (this.state.hasError) { return <ErrorIndicator />; }

    return (
      <div className="d-flex">
        <ItemList
          onItemSelected={ this.onPersonSelected }
        />
        <PersonDetails personId={ this.state.personSelected } />
      </div>);
  }
}