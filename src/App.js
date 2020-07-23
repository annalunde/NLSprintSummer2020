import React, { Component } from "react";
import { Container, Row, Col} from 'reactstrap';
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Graph from './components/Graph';
import WelcomeText from './components/WelcomeText';
import InfoCard from "./components/InfoCard";


class App extends Component {
  constructor(props) {
    // Call super class
    super(props);
    this.state = {
      data: [],
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
    var csvFilePath = require("./data/predictions.csv");
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
          <div>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        <Row className='text-center' fluid={true}>
          {/* <WelcomeText className='text-center'/> */}
        </Row>
            <Graph data={this.state.data} className="ml-5" />
      </div>
    );
  }
}

export default App;
