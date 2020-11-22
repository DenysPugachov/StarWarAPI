import React from "react";

export default function toggleBtn(props) {

  return (
    <button
      className="btn btn-warning mb-3"
      onClick={ props.toggleBtnClicked }
    >
      toggleRandomPlanet
    </button>
  );
}
