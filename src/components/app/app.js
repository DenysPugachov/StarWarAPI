import React, { Component } from "react";
import Nav from "../nav/nav";
import RandomPlanet from "../random-planet/random-planet";
import ToggleBtn from "../toggleBtn/toggleBtn";
import PersonDetails from "../person-details/person-details";
import ItemList from "../item-list/item-list";
import ErrorBtn from "../error-btn/error-btn";
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../people-page/people-page";

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  ontoggleBtnClicked = () => {
    this.setState(({ showRandomPlanet }) => {
      return {
        showRandomPlanet: !showRandomPlanet
      };
    });
  };

  componentDidCatch() {
    console.log("componentDidCatch");
    this.setState({ hasError: true });
  }

  render() {
    const { showRandomPlanet, hasError } = this.state;

    if (hasError) { return <ErrorIndicator />; }

    return (
      <div className="container" >
        <Nav />
        {showRandomPlanet ? <RandomPlanet /> : null }
        <ToggleBtn
          toggleBtnClicked={ this.ontoggleBtnClicked }
        />
        <ErrorBtn />
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
};