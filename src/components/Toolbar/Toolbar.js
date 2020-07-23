import React from "react";
import {container, Container} from 'reactstrap';

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = (props) => (
  <Container>
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
      {/* <img src={Windmill} alt="Windmill" />; */}
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
  </Container>
);

export default toolbar;
