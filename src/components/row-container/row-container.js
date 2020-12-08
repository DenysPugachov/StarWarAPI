import React from "react";
import ErrorIndicator from "../error-indicator/error-indicator";

const Row = ({ left, right }) => {
  return (
    <div className="row mb-3">
      <div className="col-md-6 mb-2">
        { left }
      </div>
      <div className="col-md-6">
        { right }
      </div>
    </div>
  );
};

export default Row;