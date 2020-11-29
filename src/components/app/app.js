import React, { Component } from "react";
import Nav from "../nav/nav";
import RandomPlanet from "../random-planet/random-planet";
import ToggleBtn from "../toggleBtn/toggleBtn";
import PersonDetails from "../item-details/item-details";
import ItemList from "../item-list/item-list";
import ErrorBtn from "../error-btn/error-btn";
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../service/swapi-services";
import Row from "../row-container/row-container";
import ItemDetails from "../item-details/item-details";

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

    const { getPerson, getStarship, getImgPerson, getImgStarship } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={ 3 }
        getData={ getPerson }
        getImg={ getImgPerson }
      />
    );

    const starshipDetails = (
      <ItemDetails
        itemId={ 5 }
        getData={ getStarship }
        getImg={ getImgStarship }
      />
    );

    return (
      <div className="container" >
        <Nav />
        <ToggleBtn
          toggleBtnClicked={ this.ontoggleBtnClicked }
        />
        <ErrorBtn />
        {showRandomPlanet ? <RandomPlanet /> : null }

        <Row
          left={ personDetails }
          right={ starshipDetails }
        />
      </div>
    );
  }
};