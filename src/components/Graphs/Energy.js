import React, { PureComponent} from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Moment from 'moment';
import InfoCardEnergy from '../InfoCardEnergy';
import { Row, Col, Container} from 'reactstrap';
import Dropdown from '../Dropdowns/Dropdown'

class Energy extends PureComponent {
  constructor(props) {
  super(props);
    this.state = {
      data: []
    }
    this.updateData = this.updateData.bind(this);
  }

  componentWillMount() {
    // Your parse code, but not seperated in a function
    var csvFilePath = require("../../data/predictions24juli.csv");
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

    const newData = []
    for (let i = 0; i < this.state.data.length; i++) {
      newData.push({
        time: Moment(this.state.data[i].timestamp).format('DD/MM HH:mm'),
        kWh: Math.round(parseFloat(this.state.data[i].energy)),
      })
    }
    console.table(newData);

    return (
      <Container style={{
        width: '100%',
        position: 'absolute', left: '45%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }} >
        <Row className='mt-5'>
          <Col sm={9}>
            <h2>Predicted Energy Production</h2>
            <LineChart
              width={900}
              height={600}
              data={newData}
              margin={{
                top: 0, right: 100, left: 0, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="kWh" stroke="#9fa9a3" activeDot={{ r: 8 }} />
            </LineChart>
          </Col>
          <Col sm={3} className='mt-5 mr-0'  >
            <Dropdown className="mr-0"/>
            <InfoCardEnergy  />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Energy;


