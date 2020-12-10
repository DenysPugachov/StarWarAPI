import React, { Component } from "react";
import Spinner from "../spinner";
import ErrorBoundary from "../error-boundary/error-boundary";

const withDataHOC = (View) => {
  return class extends Component {
    state = {
      data: null,
    };

    update() {
      this.props.getData()
        .then(data => {
          this.setState({ data });
        });
    }

    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
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