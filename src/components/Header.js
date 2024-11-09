import React from "react";
import LOGO from "../assets/images/logo-no-background.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () => {
  const status = useOnlineStatus()
  return (
    <header id="header" className="flex justify-between items-center bg-gray-100">
      <div className="logo_container">
        <img className="logo w-56" src={LOGO} />
      </div>
      <div className="flex gap-6">
        <nav className="nav_container_inner">
          <ul className="flex gap-6">
            <li>
              Online status: {status ? <span className="text-green-700">Online</span> : <span className="text-red-700">Offline</span>}
            </li>
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
          <ul className="flex gap-6">
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
