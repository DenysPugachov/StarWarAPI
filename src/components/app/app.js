import React, { Component } from "react";
import Nav from "../nav/nav";
import RandomPlanet from "../random-planet/random-planet";
import ToggleBtn from "../toggleBtn/toggleBtn";
import PersonDetails from "../person-details/person-details";
import ItemList from "../item-list/item-list";

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    personSelected: null,
  };

  ontoggleBtnClicked = () => {
    this.setState(({ showRandomPlanet }) => {
      return {
        showRandomPlanet: !showRandomPlanet
      };
    });
  };

  onPersonSelected = id => {
    this.setState({ personSelected: id });
  };

  render() {
    const { showRandomPlanet } = this.state;

    return (
      <div className="container" >
        <Nav />
        {showRandomPlanet ? <RandomPlanet /> : null }
        <ToggleBtn
          toggleBtnClicked={ this.ontoggleBtnClicked }
        />
        <ItemList
          onItemSelected={ this.onPersonSelected }
        />
        <PersonDetails personId={ this.state.personSelected } />
      </div>
    );
  }
};