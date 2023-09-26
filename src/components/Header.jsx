import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Header = () => {
 

  return (
    <div id='head' className="header">
      <Link to="/">
        <img width="50" src={logo} alt="Pizza logo" />
      </Link>
      <div className="header__top">
        <div className="header__info">
          <h2>ДОДО ПИЦЦА</h2>
          <p>Сеть пиццерий №1 в России</p>
        </div>
        <button>Войти</button>
      </div>
    </div>
  );
};

export default Header;
