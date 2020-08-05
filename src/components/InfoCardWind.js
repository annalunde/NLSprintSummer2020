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
                <Card >
                    <CardHeader>
                        <Col className="text-right"><ReactLogo width={"25px"} height={"25px"} /></Col>
                    </CardHeader>
                    <CardBody className="text-center">
                        <CardTitle></CardTitle>
                        <CardText>
                            This graph shows you the forecasted windspeeds in the {this.props.city} office area in m/s for the next 48 hours. These predictions are gathered from Yr.
                        </CardText>
                        <CardText>
                            The speeds are given as an average speed within the area, meaning that local variations may occur.
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}



export default InfoCardWind;

