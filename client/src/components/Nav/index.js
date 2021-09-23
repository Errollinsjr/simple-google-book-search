import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar sticky-top navbar-dark">
      <p className="navbar-brand"> Book Search </p>
      <div>
        <a className="navbar-brand" href="/">
          Search Books
        </a>
        <a className="navbar-brand" href="/saved">
          Saved Page
        </a>
      </div>
    </nav>
  );
}

export default Nav;
