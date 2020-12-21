import React, { Component } from "react";
import Nav from "../nav/nav";
import RandomPlanet from "../random-planet/random-planet";
import ToggleBtn from "../toggleBtn/toggleBtn";
import ErrorBtn from "../error-btn/error-btn";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../service/swapi-service";
import DummySwapiService from "../../service/dummy-swapi-service";

import { SwapiServiceProvider } from "../swapi-service-context/";
import {
  PersonPage,
  PlanetPage,
  StarshipPage
} from "../pages";

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new SwapiService(),
    serviceType: "Online",
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

  onServiceChange = () => {
    this.setState(({ swapiService }) => {

      const [service, serviceType] = (swapiService instanceof SwapiService)
        ? [DummySwapiService, "Offline"]
        : [SwapiService, "Online"];

      return {
        swapiService: new service(),
        serviceType: serviceType,
      };
    });
  };

  render() {
    const { showRandomPlanet, hasError } = this.state;

    if (hasError) { return <ErrorIndicator />; }

    return (
      <SwapiServiceProvider value={ this.state.swapiService }>
        <div className="container" >
          <Nav
            onServiceChange={ this.onServiceChange }
            serviceType={ this.state.serviceType }
          />

          <ToggleBtn
            toggleBtnClicked={ this.ontoggleBtnClicked }
          />

          <ErrorBtn />

          { showRandomPlanet ? <RandomPlanet /> : null }

          <PersonPage />
          <PlanetPage />
          <StarshipPage />

        </div >
      </SwapiServiceProvider>
    );
  }
};