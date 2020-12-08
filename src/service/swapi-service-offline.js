import PersonImg from "../img/person1.jpg";
import StarshipImg from "../img/starship13.jpg";
import PlanetImg from "../img/planet5.jpg";


export default class SwapiService {

  _apiBase = "https://swapi.dev/api";

  //for offline purpose
  listOfflinePerson = [
    { name: "Person1", id: 1, gender: "male", birthYear: 1980 },
    { name: "Person2", id: 2, gender: "male", birthYear: 1981 },
    { name: "Person3", id: 3, gender: "male", birthYear: 1982 },
    { name: "Person4", id: 4, gender: "male", birthYear: 1987 },
    { name: "Person5", id: 5, gender: "male", birthYear: 1988 },
    { name: "Person6", id: 6, gender: "male", birthYear: 1989 },
  ];

  listOfflinePlanet = [
    { name: "Planet1", id: 1 },
    { name: "Planet2", id: 2 },
    { name: "Planet3", id: 3 },
    { name: "Planet4", id: 4 },
    { name: "Planet5", id: 5 },
    { name: "Planet6", id: 6 },
  ];

  listOfflineStarships = [
    { name: "Starship1", id: 1 },
    { name: "Starship2", id: 2 },
    { name: "Starship3", id: 3 },
    { name: "Starship4", id: 4 },
    { name: "Starship5", id: 5 },
    { name: "Starship6", id: 6 },
  ];

  personOffline = {
    id: 1,
    name: "Luck Skylarker",
    gender: "male",
    height: "185sm",
    birthYear: 1985,
    eyeColor: "green"
  };

  planetOffline = {
    id: 1,
    name: "planet.name",
    population: "planet.population",
    rotationPeriod: "planet.rotation_period",
    diameter: "planet.diameter",
  };

  starshipOffline = {
    id: 1,
    name: "Space auto ",
    model: "e36",
    manufacture: "BMW",
    costInCredits: "10000EUR",
    length: "5m.",
    crew: "1 pilot",
    passengers: "5 human",
    cargoCapacity: "500kg.",
  };

  getImgPerson = (id) => {
    return PersonImg;
  };

  getImgPlanet = (id) => {
    return PlanetImg;
  };

  getImgStarship = (id) => {
    return StarshipImg;
  };

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    // const res = await this.getResource(`/people/`);
    // return res.results.map(this._transformPerson);
    return this.listOfflinePerson;
  };

  getPerson = async (id) => {
    // const person = await this.getResource(`/people/${id}`);
    // return this._transformPerson(person);
    return this.personOffline;
  };

  getAllPlanets = async () => {
    // const res = await this.getResource(`/planets/`);
    // return res.results.map(this._transformPlanet);
    return this.listOfflinePlanet;
  };

  getPlanet = async (id) => {
    // const planet = await this.getResource(`/planets/${id}`);
    // return this._transformPlanet(planet);
    return this.planetOffline;
  };

  getAllStarships = async () => {
    // const res = await this.getResource(`/starships/`);
    // return res.results.map(this._transformStarShip);
    return this.listOfflineStarships;
  };

  getStarship = async (id) => {
    // const starship = this.getResource(`/starships/${id}`);
    // return this._transformStarShip(starship);
    return this.starshipOffline;
  };

  _extractId = async (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      height: person.height,
    };
  };

  _transformStarShip = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacture: starship.manufacture,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  };
}
