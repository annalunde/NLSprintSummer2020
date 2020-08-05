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
                <Card >
                    <CardHeader>
                        <Col className="text-right"><ReactLogo width={"25px"} height={"25px"} /></Col>
                    </CardHeader>
                    <CardBody className="text-center">
                        <CardTitle></CardTitle>
                        <CardText>
                            This graph shows you a prediction of the energy production for the {this.props.city} office area in kWh in the next 48 hours, had this area been a windmill park.
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

