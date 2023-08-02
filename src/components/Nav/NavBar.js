
import React from 'react';
import Burger from './Burger';
import { NavLink } from "react-router-dom";

import './nav.scss'


const NavBar = () => {
    return (
      <nav>
        <div className="navbar">
            <NavLink className="navbar__item" to={`/`}> Головна </NavLink>
            <NavLink className="navbar__item" to={`/packaging`}> Пакування </NavLink>
            <NavLink className="navbar__item" to={`/reviews`}> Відгуки </NavLink>
            <NavLink className="navbar__item" to={`/contacts`}> Контакти </NavLink>
        </div>
        <Burger />
      </nav>
    )
  }


export default NavBar