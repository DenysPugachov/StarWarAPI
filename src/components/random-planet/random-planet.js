import React, { Component } from "react";
import SwapiService from "../../service/swapi-services";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner";


export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  onError = err => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 22) + 3;
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={ planet } /> : null;

    return (
      <div className="card flex-row mb-3 justify-content-center">
        { errorMessage }
        { spinner }
        { content }
      </div >
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img className="m-3 rounded w-25 h-25" src={ `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` } alt={ `${id}` } />
      <div className="card-body p-0">
        <h3 className="card-title pt-3 m-0 ">{ name }</h3>
        <ul className=" list-group-flush">
          <li className="list-group-item">Population <span>{ population }</span> </li>
          <li className="list-group-item">Rotation <span>{ rotationPeriod }</span> </li>
          <li className="list-group-item">Diameter <span>{ diameter }</span> </li>
        </ul>
      </div >
    </React.Fragment>
  );
};