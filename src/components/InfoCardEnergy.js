import React, {Component } from 'react';
import {
    Card, CardHeader, CardBody,
    CardTitle, CardText, Col
} from 'reactstrap';
import { ReactComponent as ReactLogo } from '../pictures/Info.svg';

class InfoCardEnergy extends Component {
    render() {

        return (
            <div >
                <Card style={{
                    width: '100%',
                    position: 'absolute', left: '80%', top: '68%',
                    transform: 'translate(-50%, -50%)'
                }} >
                    <CardHeader>
                        <Col className="text-right"><ReactLogo width={20} height={20} /></Col>
                    </CardHeader>
                    <CardBody className="text-center">
                        <CardTitle></CardTitle>
                        <CardText>
                            This graph shows you a prediction of the energy production in a windmill park in kWh in the next 48 hours.
                        </CardText>
                        <CardText>
                            This is estimated using historical energy production data and the forecasted windspeed.
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}



export default InfoCardEnergy;

