import React, { Component } from "react";
import Nav from "../nav/nav";
import RandomPlanet from "../random-planet/random-planet";
import ToggleBtn from "../toggleBtn/toggleBtn";
import PersonDetails from "../person-details/person-details";
import ItemList from "../item-list/item-list";
import ErrorBtn from "../error-btn/error-btn";
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../service/swapi-services";

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
    console.log("componentDidCatch");
    this.setState({ hasError: true });
  }

  render() {
    const { showRandomPlanet, hasError } = this.state;

    if (hasError) { return <ErrorIndicator />; }

    return (
      <div className="container" >
        <Nav />
        <ToggleBtn
          toggleBtnClicked={ this.ontoggleBtnClicked }
        />
        <ErrorBtn />
        {showRandomPlanet ? <RandomPlanet /> : null }

        <PeoplePage />

        <div className="d-flex">
          <ItemList
            onItemSelected={ this.onPersonSelected }
            getData={ this.swapiService.getAllPlanets }
            renderItem={ item =>
              <span>
                { item.name } <button className="btn btn-outline-warning">!</button>
              </span>
            }
          />
          <PersonDetails personId={ this.state.personSelected } />
        </div>);

        <div className="d-flex">
          <ItemList
            onItemSelected={ this.onPersonSelected }
            getData={ this.swapiService.getAllStarships }
            renderItem={ item => item.name }
          />
          <PersonDetails personId={ this.state.personSelected } />
        </div>);
      </div>
    );
  }
};