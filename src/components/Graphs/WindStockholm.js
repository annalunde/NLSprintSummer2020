import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Moment from 'moment';
import InfoCardWind from '../InfoCardWind';
import { Row, Col, Container } from 'reactstrap';
import DropdownWind from '../Dropdowns/DropdownWind'

class WindStockholm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.updateData = this.updateData.bind(this);
    }

    componentWillMount() {
        // Your parse code, but not seperated in a function
        var csvFilePath = require("../../data/wsstockholm30juli.csv");
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
        const data = this.state.data
        const newData = []
        for (let i = 0; i < data.length; i++) {
            newData.push({
                time: Moment(data[i].tid).format('DD/MM HH:mm'),
                "m/s": parseFloat(data[i].windspeed).toFixed(1),
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
                        <h2>Predicted Windspeeds</h2>
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
                            <Line type="monotone" dataKey="m/s" stroke="#9fa9a3" activeDot={{ r: 8 }} />
                        </LineChart>
                    </Col>
                    <Col className='mt-5 mr-0'  >
                        <Row>
                        <DropdownWind className="mr-0" />
                        </Row>
                        <Row>
                        <InfoCardWind />
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default WindStockholm;


