import personImg from "./img/person1.jpg";
import personImg2 from "./img/person2.jpg";
import planetImg from "./img/planet5.jpg";
import starshipImg from "./img/starship12.jpg";
import starshipImg2 from "./img/starship13.jpg";

export default class DummySwapiService {

  _people = [
    {
      id: 1,
      name: 'Bilbo Baggins [TEST DATA OFFLINE]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    },

    {
      id: 2,
      name: 'Frodo Baggins [TEST DATA OFFLINE]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    }
  ];

  _planets = [
    {
      id: 1,
      name: 'Earth [TEST DATA OFFLINE]',
      population: '7.530.000.000',
      rotationPeriod: '23 hours 56 seconds',
      diameter: '12.742 km'
    },
    {
      id: 2,
      name: 'Venus [TEST DATA OFFLINE]',
      population: 'not known',
      rotationPeriod: '243 days',
      diameter: '12.104 km'
    }
  ];

  _starships = [
    {
      id: 1,
      name: 'USS Enterprise [TEST DATA OFFLINE]',
      model: 'NCC-1701-C',
      manufacturer: 'Northrop Grumman Shipbuilding',
      costInCredits: 'not known',
      length: 'approx 300 meters',
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100
    }
  ];

  getAllPeople = async () => {
    return this._people;
  };

  getPerson = async () => {
    return this._people[0];
  };

  getAllPlanets = async () => {
    return this._planets;
  };

  getPlanet = async () => {
    return this._planets[0];
  };

  getAllStarships = async () => {
    return this._starships;
  };

  getStarship = async () => {
    return this._starships[0];
  };

  getImgPerson = () => {
    return personImg;
  };

  getImgStarship = () => {
    return starshipImg;
  };

  getImgPlanet = () => {
    return planetImg;
  };
}
