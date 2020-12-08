import React, { Component } from "react";


export default class ErrorBtn extends Component {

  state = {
    renderError: false,
  };

  render() {
    if (this.state.renderError) { this.foo.bar = 0; };

    return (
      <button
        className="btn btn-danger m-3 ml-3"
        onClick={ () => this.setState({ renderError: true }) }
      >
        Get Error
      </button>);
  }
}
