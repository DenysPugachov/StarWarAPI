import React from "react";
import errIcon from "./error.png";

const ErrorIndicator = () => {
  return (
    <div className="text-warning d-flex justify-content-center p-3">
      <div className="img-fluid">
        <img src={ errIcon } alt="errorIcon" className="mt-3" />
      </div>
      <div className="m-3">
        <h2 className="">BOOM!!!</h2>
        <h4>Something went terribly wrong...</h4>
      </div>
    </div>
  );
};

export default ErrorIndicator;