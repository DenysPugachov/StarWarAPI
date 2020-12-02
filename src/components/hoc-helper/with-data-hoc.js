import React, { Component } from "react";
import Spinner from "../spinner";
import ErrorBoundary from "../error-boundary/error-boundary";

const withDataHOC = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
    };

    componentDidMount() {
      getData()
        .then(data => {
          this.setState({ data });
        });
    }

    render() {
      const { data } = this.state;
      if (!data) {
        return (
          <ul className="card w-50 m-auto" >
            <Spinner />
          </ul>
        );
      }
      return (
        <ErrorBoundary>
          <View { ...this.props } data={ data } />
        </ErrorBoundary>
      );
    }
  };
};

export default withDataHOC;