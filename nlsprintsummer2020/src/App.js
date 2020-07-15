import React, { Component } from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false,
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
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: "64px" }}>
          <p>Welcome to GreenForecast!</p>
          <p>
            This web application is a set of graphs, giving you insight into the
            energy produced in a windmill park
          </p>
          <p>
            In the application, you can choose to see the forecasted weather and
            the estimated production outcome derived from forecasted weather
            data.
          </p>
          <p>
            You can also check out historical data from the park, and compare
            forecasted production values to actual production values, giving you
            insight into the accuracy of the prediction model we in
            GreenForecast have created.
          </p>
        </main>
      </div>
    );
  }
}

export default App;
