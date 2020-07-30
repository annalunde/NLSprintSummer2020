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
import WindStockholm from './components/Graphs/WindStockholm';
import Wind from "./components/Graphs/Wind";
import WelcomeText from './components/WelcomeText';
import EnergyStockholm from "./components/Graphs/EnergyStockholm";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataWind: [],
      sideDrawerOpen: false,
    }
    // Bind this to function updateData (This eliminates the error)
    this.updateData = this.updateData.bind(this);
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  componentWillMount() {
    // Your parse code, but not seperated in a function
    var csvFilePath = require("./data/predictions24juli.csv");
    var Papa = require("papaparse/papaparse.min.js");
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      // Here this is also available. So we can call our custom class method
      complete: this.updateData
    });
  }

  updateData(result) {
    const data = result.data
    // Here this is available and we can call this.setState (since it's binded in the constructor)
    this.setState({ data: data }); // or shorter ES syntax: this.setState({ data });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
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
          <Route path="/stockholmWind">
            <WindStockholm
              className="ml-5" />
          </Route>
          <Route path="/stockholmEnergy">
            <EnergyStockholm
              className="ml-5" />
          </Route>
          <Route path="/">
            <Row className='text-center'>
              <WelcomeText />
            </Row>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
