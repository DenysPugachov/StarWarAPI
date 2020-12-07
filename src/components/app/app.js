import React, { Component } from "react";
import Nav from "../nav/nav";
import RandomPlanet from "../random-planet/random-planet";
import ToggleBtn from "../toggleBtn/toggleBtn";
import ItemList from "../item-list/item-list";
import ErrorBtn from "../error-btn/error-btn";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../service/swapi-services";
import DummySwapiService from "../../service/dummy-swapi-service";
import Row from "../row-container/row-container";
import ItemDetails, { Record } from "../item-details/item-details";
import PeoplePage from "../people-page/people-page";
import {
  PersonList,
  StarshipsList,
  PlanetList,
  PersonDetails,
  StarshipDetails,
  PlanetDetails
} from "../sw-components";


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

    // const { getPerson, getStarship, getImgPerson, getImgStarship, getPlanet, getImgPlanet } = this.swapiService;

    // const personDetails = (
    //   <ItemDetails
    //     itemId={ 3 }
    //     getData={ getPerson }
    //     getImg={ getImgPerson }
    //   >
    //     <Record field="gender" label="Gender: " />
    //     <Record field="eyeColor" label="Eye color: " />
    //   </ItemDetails>
    // );

    // const starshipDetails = (
    //   <ItemDetails
    //     itemId={ 5 }
    //     getData={ getStarship }
    //     getImg={ getImgStarship }
    //   >
    //     <Record field="model" label="model: " />
    //     <Record field="manufacture" label="manufacture: " />
    //     <Record field="costInCredits" label="costInCredits: " />
    //     <Record field="length" label="length: " />
    //     <Record field="crew" label="crew: " />
    //     <Record field="passengers" label="passengers: " />
    //     <Record field="cargoCapacity" label="cargoCapacity: " />
    //   </ItemDetails>
    // );

    // const planetDetails = (
    //   <ItemDetails
    //     itemId={ 5 }
    //     getData={ getPlanet }
    //     getImg={ getImgPlanet }
    //   >
    //     <Record field="name" label="name: " />
    //     <Record field="population" label="population: " />
    //     <Record field="rotationPeriod" label="rotationPeriod: " />
    //     <Record field="diameter" label="diameter: " />
    //   </ItemDetails>
    // );

    return (
      <div className="container" >
        <Nav />

        <ToggleBtn
          toggleBtnClicked={ this.ontoggleBtnClicked }
        />

        <ErrorBtn />

        {showRandomPlanet ? <RandomPlanet /> : null }

        <Row
          left={
            <PersonList >
              { ({ name }) => <span>{ name }</span> }
            </PersonList > }
          right={ <PersonDetails /> }
        />

        <Row
          left={
            <StarshipsList >
              { ({ name }) => <span>{ name }</span> }
            </StarshipsList >
          }
          right={ <StarshipDetails /> }
        />

        <Row
          left={
            <PlanetList >
              { ({ name }) => <span>{ name }</span> }
            </PlanetList >
          }
          right={ <PlanetDetails /> }
        />

      </div >
    );
  }
};