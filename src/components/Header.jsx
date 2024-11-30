import React from "react";
import logo from "../assets/react.svg";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand mx-2" href="/">
          <img src={logo} alt="" width="30" height="24" className="mx-3 d-inline-block align-text-top" />
          Restro App
        </a>
      </div>
    </nav>
  );
};

export default Header;
