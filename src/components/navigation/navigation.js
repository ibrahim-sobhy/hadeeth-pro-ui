import  React  from "react";
import '../../scss/colors.scss';
import './navigation.scss'

import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="app-nav">
      <div className="app-nav__link">
        <NavLink
          to="/add"
          className="app-nav__link--btn"
          activeClassName="app-nav__link--active"
        >
          <i className="fas fa-plus"></i>
        </NavLink>
        <NavLink
          to="/tasks"
          className="app-nav__link--btn"
          activeClassName="app-nav__link--active"
        >
          <i className="fas fa-tasks"></i>
        </NavLink>
      </div>
      <div className="app-nav__status">
        <span className="app-nav__status--badge">3</span>
        <div className="app-nav__status--img">
          <img alt="person" src="man.png" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;