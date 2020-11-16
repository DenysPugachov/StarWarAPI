import React from "react";
import errIcon from "./devil.png";

const ErrorIndicator = () => {
  return (
    <div className="text-warning">
      <img src={ errIcon } alt="errorIcon" />
      <h2>BOOM!</h2>
      <h4>Something went terribly wrong</h4>
      <p>We sent droids to fix it</p>
    </div>
  );
};

export default ErrorIndicator;