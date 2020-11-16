import React from "react";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent mb-3">
      <div className="container">
        <a className="navbar-brand" href="/"><span className="h2">StarDB</span></a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-success" href="/">People</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link text-success" href="/">Planet</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link text-success" href="/">StarShip</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}