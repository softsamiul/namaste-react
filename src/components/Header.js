import React from "react";
import LOGO from "../assets/images/logo-no-background.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="header d_flex align-i-center">
      <div className="logo_container">
        <img className="logo" src={LOGO} />
      </div>
      <div className="nav_container d_flex ">
        <nav className="nav_container_inner">
          <ul className="ul_normal d_flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="user_info">
          <ul className="ul_normal d_flex">
            <li>Cart</li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>User</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
