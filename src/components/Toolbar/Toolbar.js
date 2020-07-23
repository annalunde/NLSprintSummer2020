import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import { ReactComponent as ReactLogo } from "../../pictures/Windmill.svg";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <ReactLogo viewBox="0 0 120 385" />
        <a href="/">Green Forecast</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Energy</a>
          </li>
          <li>
            <a href="/">History</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
