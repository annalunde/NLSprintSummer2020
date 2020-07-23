import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Moment from 'moment';
import InfoCard from './InfoCard';
import { Row, Col, Container } from 'reactstrap';

class Graph extends PureComponent {

  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {

    const data = this.props.data;
    const newData = []
    for (let i = 0; i < data.length; i++) {
      newData.push({
        time: Moment(data[i].timestamp).format('DD/MM HH:mm'),
        kWh: Math.round(parseFloat(data[i].energy)),
      })
    }
    console.table(newData);

    return (
      <Container sm="auto" className='mt-5'>
        <Row className='mt-5'>
        <Col sm={9}>
          <LineChart
            width={900}
            height={600}
            data={newData}
            margin={{
              top: 100, right: 100, left: 0, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="kWh" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </Col>
        <Col className='mt-5' >
          <InfoCard className='mt-5' />
        </Col>
        </Row>
      </Container>
    );
  }
}

export default Graph;


