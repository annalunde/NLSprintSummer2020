import React, { Component } from 'react';
import {
    Card, CardHeader, CardBody,
    CardTitle, CardText, Col
} from 'reactstrap';
import { ReactComponent as ReactLogo } from '../pictures/Info.svg';

class InfoCardWind extends Component {
    render() {

        return (
            <div >
                <Card style={{
                    width: '100%',
                    position: 'absolute', left: '80%', top: '64%',
                    transform: 'translate(-50%, -50%)'
                }} >
                    <CardHeader>
                        <Col className="text-right"><ReactLogo width={20} height={20} /></Col>
                    </CardHeader>
                    <CardBody className="text-center">
                        <CardTitle></CardTitle>
                        <CardText>
                            This graph shows you the forecasted windspeeds in a windmill park in m/s for the next 48 hours. These predictions are gathered from Yr.
                        </CardText>
                        <CardText>
                            The speeds are given as an average speed for all areas in the park, meaning that local variations may occur.
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}



export default InfoCardWind;

