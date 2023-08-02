import React from 'react';
import { NavLink } from "react-router-dom";

const RightNav = ({ setOpen }) => {

  const close = () => setTimeout(() => {
    setOpen(false)
  }, 200);


  return (
    <ul className="right-nav">
            <NavLink className="navbar__item" onClick={() => close()} to={`/`}> Головна </NavLink>
            <NavLink className="navbar__item" onClick={() => close()} to={`/packaging`}> Пакування </NavLink>
            <NavLink className="navbar__item" onClick={() => close()} to={`/reviews`}> Відгуки </NavLink>
            <NavLink className="navbar__item" onClick={() => close()} to={`/contacts`}> Контакти </NavLink>
    </ul>
  )
}

export default RightNav