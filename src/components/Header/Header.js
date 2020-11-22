import React from "react";
import "./Header.css";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header-nav container">
      <Link to="/" id="header-logo">conduit</Link>
      <div>
        <NavLink to="/home" className="header-menu" activeClassName="selected">
          home
        </NavLink>
        <NavLink to="/login" className="header-menu" activeClassName="selected">
          login
        </NavLink>
        <NavLink to="/register" className="header-menu" activeClassName="selected">
          cadastrar
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
