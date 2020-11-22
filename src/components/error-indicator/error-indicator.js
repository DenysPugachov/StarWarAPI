import React from "react";
import errIcon from "./error.png";

const ErrorIndicator = () => {
  return (
    <div className="text-warning d-flex justify-content-end p-3">
      <img src={ errIcon } alt="errorIcon" className="w-50" />
      <div className="m-3">
        <h2 className="">BOOM!!!</h2>
        <h4>Something went terribly wrong...</h4>
        <p>(we sent droids to fix it)</p>
      </div>
    </div>
  );
};

export default ErrorIndicator;