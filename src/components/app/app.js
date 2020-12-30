import React, { Component } from "react";
import Nav from "../nav/nav";
import RandomPlanet from "../random-planet/random-planet";
import ToggleBtn from "../toggleBtn/toggleBtn";
import ErrorBtn from "../error-btn/error-btn";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../service/swapi-service";
import DummySwapiService from "../../service/dummy-swapi-service";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { SwapiServiceProvider } from "../swapi-service-context/";
import { PersonPage, PlanetPage, StarshipPage } from "../pages";

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
        showRandomPlanet: !showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    console.log("componentDidCatch + just commit");
    this.setState({ hasError: true });
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const [service, serviceType] =
        swapiService instanceof SwapiService
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

    if (hasError) {
      return <ErrorIndicator />;
    }

    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <Router>
          <div className="container">
            <Nav
              onServiceChange={this.onServiceChange}
              serviceType={this.state.serviceType}
            />

            <ToggleBtn toggleBtnClicked={this.ontoggleBtnClicked} />

            <ErrorBtn />

            {showRandomPlanet ? <RandomPlanet /> : null}

            <Route path="/" render={() => <h2>Welcomt to StarDB</h2>}
              exact />
            <Route path="/people" component={PersonPage}
              exact />
            <Route path="/planets" component={PlanetPage} />
            <Route path="/starships" component={StarshipPage} />
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}
