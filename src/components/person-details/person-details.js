import React from "react";

export default function Header() {
  return (
    <div className="card flex-row mb-3">
      <img className="m-3 rounded " src="https://source.unsplash.com/random/201x201" alt="dde"></img>
      <div className="card-body">
        <h3 className="card-title">Person name</h3>
        <ul className=" list-group-flush">
          <li className="list-group-item">Name <span>100</span> </li>
          <li className="list-group-item">Gander <span>100</span> </li>
          <li className="list-group-item">Year <span>100</span> </li>
        </ul>
      </div >
    </div >
  );
}