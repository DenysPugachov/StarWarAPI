import React from "react";
import {Link} from "react-router-dom"

export default function Nav({ onServiceChange, serviceType }) {

  const btnCls = (serviceType === "Online")
    ? ["btn", "btn-success"]
    : ["btn", "btn-outline-secondary text-success"];

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent mb-3">
      <div className="container justify-content-start">
        <Link className="navbar-brand" to="/"><span className="h2">StarDB</span></Link>
        <ul className="navbar-nav justify-content-around w-50">
          <li className="nav-item">
            <Link className="nav-link text-success" to="/people">People </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link text-success" to="/planets">Planet</Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link text-success" to="/starships">StarShip</Link>
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