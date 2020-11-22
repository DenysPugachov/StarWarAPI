import React, { Component } from "react";
import SwapiService from "../../service/swapi-services";

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
  };


  updatePerson() {
    console.log("updatePerson");
    const { personId } = this.props;
    if (!personId) { return; }

    this.swapiService
      .getPerson(personId)
      .then((person) => this.setState({ person }));
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  render() {
    // console.log("this.state.person", this.state.person);

    if (!this.state.person) { return <span>Select person!</span>; }

    const { id, name, gender, height, birthYear, eyeColor } = this.state.person;

    return (
      <div className="card flex-row mb-3" >
        <img className="m-3 rounded"
          src={ `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` }
          alt="personImg"></img>
        <div className="card-body" >
          <h3 className="card-title">{ name } { this.props.personId }</h3>
          <ul className=" list-group-flush">
            <li className="list-group-item">Gender <span>{ gender }</span> </li>
            <li className="list-group-item">Year <span>{ birthYear }</span> </li>
            <li className="list-group-item">Eye color <span>{ eyeColor }</span> </li>
            <li className="list-group-item">Height <span>{ height }</span> </li>
          </ul>
        </div >
      </div >
    );
  }
};