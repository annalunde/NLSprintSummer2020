import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from '../../pictures/Windmill.svg';
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = (props) => (

  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <Link to="/">
          <ReactLogo className="toolbar_logo_picture" />
        </Link>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link to="/wind">Windspeed</Link>
          </li>
          <li>
            <Link to="/energy">Energy</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
