import React, { Component } from "react";
import Nav from "../nav/nav";
import RandomPlanet from "../random-planet/random-planet";
import ToggleBtn from "../toggleBtn/toggleBtn";
import ErrorBtn from "../error-btn/error-btn";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../service/swapi-service";
import DummySwapiService from "../../service/dummy-swapi-service";
import Row from "../row-container/row-container";
import {
  PersonList,
  StarshipsList,
  PlanetList,
  PersonDetails,
  StarshipDetails,
  PlanetDetails
} from "../sw-components";
import { SwapiServiceProvider } from "../swapi-service-context/";

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: false,
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
    console.log("componentDidCatch + just commit");
    this.setState({ hasError: true });
  }

  render() {
    const { showRandomPlanet, hasError } = this.state;

    if (hasError) { return <ErrorIndicator />; }

    return (
      <SwapiServiceProvider value={ this.swapiService }>
        <div className="container" >
          <Nav />

          <ToggleBtn
            toggleBtnClicked={ this.ontoggleBtnClicked }
          />

          <ErrorBtn />

          { showRandomPlanet ? <RandomPlanet /> : null }

          <Row
            left={ <PersonList /> }
            right={ <PersonDetails itemId={ 3 } /> }
          />

          <Row
            left={ <StarshipsList /> }
            right={ <StarshipDetails itemId={ 3 } /> }
          />

          <Row
            left={ <PlanetList /> }
            right={ <PlanetDetails itemId={ 3 } /> }
          />

        </div >
      </SwapiServiceProvider>
    );
  }
};