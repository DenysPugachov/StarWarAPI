import React, { Component } from "react";
import Nav from "../nav/nav";
import RandomPlanet from "../random-planet/random-planet";
import ToggleBtn from "../toggleBtn/toggleBtn";
import ItemList from "../item-list/item-list";
import ErrorBtn from "../error-btn/error-btn";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../service/swapi-services";
import Row from "../row-container/row-container";
import ItemDetails, { Record } from "../item-details/item-details";
import PeoplePage from "../people-page/people-page";


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
      >
        <Record field="gender" label="Gender: " />
        <Record field="eyeColor" label="Eye color: " />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={ 5 }
        getData={ getStarship }
        getImg={ getImgStarship }
      >
        <Record field="model" label="model: " />
        <Record field="manufacture" label="manufacture: " />
        <Record field="costInCredits" label="costInCredits: " />
        <Record field="length" label="length: " />
        <Record field="crew" label="crew: " />
        <Record field="passengers" label="passengers: " />
        <Record field="cargoCapacity" label="cargoCapacity: " />
      </ItemDetails>
    );

    return (
      <div className="container" >
        <Nav />
        <ToggleBtn
          toggleBtnClicked={ this.ontoggleBtnClicked }
        />
        <ErrorBtn />
        {showRandomPlanet ? <RandomPlanet /> : null }

        <PeoplePage />
        <PeoplePage />
        {/* <Row
          left={ personDetails }
          right={ starshipDetails }
        /> */}
      </div>
    );
  }
};