import React, { Component } from "react";
import SwapiService from "../../service/swapi-services";
import ErrorBtn from "../error-btn/error-btn";
import Spinner from "../spinner";
import "./person-details.css";

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
  };


  updatePerson() {
    const { personId } = this.props;
    if (!personId) { return; }

    this.swapiService
      .getPerson(personId)
      .then((person) => this.setState({ person, loading: false, }));
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({ loading: true });
      this.updatePerson();
    }
  }

  render() {

    if (!this.state.person) {
      return (
        <div className="card ml-3 w-50" >
          <h3 className="m-auto">Select person</h3>
        </div>
      );
    }
    const { loading, person: { id, name, gender, height, birthYear, eyeColor } } = this.state;

    if (loading) { return (<Spinner />); }


    return (
      <div className="card flex-row mb-3" >
        <img className="m-3 rounded detail-img"
          src={ `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` }
          alt="personImg" />
        <div className="card-body" >
          <h3 className="card-title">{ name } { this.props.personId }</h3>
          <ul className=" list-group-flush">
            <li className="list-group-item">Gender <span>{ gender }</span> </li>
            <li className="list-group-item">Year <span>{ birthYear }</span> </li>
            <li className="list-group-item">Eye color <span>{ eyeColor }</span> </li>
            <li className="list-group-item">Height <span>{ height }</span> </li>
            <ErrorBtn />
          </ul>
        </div >
      </div >
    );
  }
};