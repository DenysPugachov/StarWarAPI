import React from "react";

export default function Nav({ onServiceChange, serviceType }) {

  const btnCls = (serviceType === "Online")
    ? ["btn", "btn-success"]
    : ["btn", "btn-outline-secondary text-success"];

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent mb-3">
      <div className="container justify-content-start">
        <a className="navbar-brand" href="/"><span className="h2">StarDB</span></a>
        <ul className="navbar-nav justify-content-around w-50">
          <li className="nav-item">
            <a className="nav-link text-success" href="/">People</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link text-success" href="/">Planet</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link text-success" href="/">StarShip</a>
          </li>
          <li className="navbar-item">
            <button
              onClick={ onServiceChange }
              className={ btnCls.join(" ") }
            >
              { serviceType }
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}