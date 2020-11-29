import React, { Component } from 'react';
import SwapiService from '../../service/swapi-services';
import ErrorBoundary from '../error-boundary/error-boundary';
import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import Row from '../row-container/row-container';


export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    personSelected: 10,
  };

  onPersonSelected = id => {
    this.setState({ personSelected: id });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={ this.onPersonSelected }
        getData={ this.swapiService.getAllPeople }
        renderItem={ (i) => (`${i.name}, (${i.birthYear})`) }
      >
        { i => `${i.name}, (${i.birthYear})` }
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundary>
        <ItemDetails personId={ this.state.personSelected } />
      </ErrorBoundary>
    );

    return (
      <Row
        left={ itemList }
        right={ personDetails }
        hasError={ this.state.hasError }
      />
    );
  }
}