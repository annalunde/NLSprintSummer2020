import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Moment from 'moment';
import './Graph.css'
import InfoCardEnergy from '../InfoCardEnergy';
import Dropdown from '../Dropdowns/Dropdown'

class Energy extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      path: "Oslo"
    }
    this.updateData = this.updateData.bind(this);
  }

  setPath(city) {
    this.setState({ path: city });
    console.log(this.state.path)
    this.updateGraph(city);
  }

  updateGraph(path) {
    var csvFilePath = require("../../data/Energy" + path + ".csv");
    console.log(csvFilePath);
    var Papa = require("papaparse/papaparse.min.js");
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      // Here this is also available. So we can call our custom class method
      complete: this.updateData
    });
  }
  componentWillMount() {
    this.updateGraph("Oslo");
  }

  updateData(result) {
    const data = result.data
    console.log(data);
    // Here this is available and we can call this.setState (since it's binded in the constructor)
    this.setState({ data: data }); // or shorter ES syntax: this.setState({ data });
  }



  render() {

    const newData = []
    for (let i = 0; i < this.state.data.length; i++) {
      newData.push({
        time: Moment(this.state.data[i].timestamp).format('DD/MM HH:mm'),
        kWh: Math.round(parseFloat(this.state.data[i].energy)),
      })
    }

    return (
      <div className="mainWrapper" >
        <div className="graphWrapper">
          <h2 className="Title"> Predicted Energy Production in {this.state.path}</h2>
          <LineChart
            width={940}
            height={600}
            data={newData}
            margin={{
              top: 2, right: 100, left: 10, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="kWh" stroke="#9fa9a3" activeDot={{ r: 8 }} />
          </LineChart>
        </div>
        <div className="infoWrapper">
          <Dropdown className="Dropdown" triggerGraphChange={this.setPath.bind(this)} />
          <InfoCardEnergy className="Info" city={this.state.path} />
        </div>
      </div>
    );
  }
}

export default Energy;


