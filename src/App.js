import React, { Component } from "react";
import { Row } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Energy from './components/Graphs/Energy';
import Wind from "./components/Graphs/Wind";
import WelcomeText from './components/WelcomeText';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
    }
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="body">
      <Router>
        <Toolbar
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <Switch>
        <Route path="/wind">
            <Wind
              className="ml-5" />
          </Route>
          <Route path="/energy">
            <Energy
              className="ml-5" />
          </Route>
          <Route path="/">
            <Row className='text-center'>
              <WelcomeText />
            </Row>
          </Route>
        </Switch>
      </Router>
      </div>
    )
  }
}

export default App;
