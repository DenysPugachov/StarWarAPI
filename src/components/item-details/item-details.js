import React, { Component } from "react";
import SwapiService from "../../service/swapi-services";
import ErrorBoundary from "../error-boundary/error-boundary";
import ErrorBtn from "../error-btn/error-btn";
import Spinner from "../spinner";
// import PersonImg1 from "../../img/person1.jpg";
import "./item-details.css";

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true,
  };


  updateItem() {
    const { itemId } = this.props;
    if (!itemId) { return; }
    const { getData } = this.props;

    getData(itemId)
      .then((item) => this.setState({ item, loading: false, }));
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({ loading: true });
      this.updateItem();
    }
  }

  render() {
    if (!this.state.item) {
      return (
        <div className="card ml-3 mb-3 list-group-item" >
          <h3 className="m-auto">Select item ...</h3>
        </div>
      );
    }

    const { loading, item: { id, name, gender, height, birthYear, eyeColor } } = this.state;

    if (loading) { return (<Spinner />); }

    return (
      <ErrorBoundary>
        <div className="card flex-row mb-3 border-secondary " >
          <div className="col-md-5">
            <img className="m-3 rounded detail-img img-fluid"
              // src={ `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` }
              src={ this.props.getImg() }
              alt="here must be an Img..." />
          </div>
          <div className="card-body pb-0 " >
            <h3 className="card-title">{ name } { this.props.personId }</h3>
            <ul className=" list-group-flush p-0">
              <li className="list-group-item">Gender: <span>{ gender }</span> </li>
              <li className="list-group-item">Year: <span>{ birthYear }</span> </li>
              <li className="list-group-item">Eye color: <span>{ eyeColor }</span> </li>
              <li className="list-group-item">Height: <span>{ height }</span> </li>
              <ErrorBtn />
            </ul>
          </div >
        </div >
      </ErrorBoundary>
    );
  }
};