import React from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Col
} from 'reactstrap';
import { ReactComponent as ReactLogo } from '../pictures/Info.svg';

const InfoCard = (props) => {

    return (
        <div >
            <Card style={{
                width: '100%',
                position: 'absolute', left: '60%', top: '65%',
                transform: 'translate(-50%, -50%)'
            }} >
                <CardHeader>
                    <Col className="text-right"><ReactLogo width={20} height={20} /></Col>
                </CardHeader>
                <CardBody className="text-center">
                    <CardTitle></CardTitle>
                    <CardText>
                        The graph shows you a prediction of the energy production in a windmill park in kWh in the next X minutes.
                    </CardText>
                    <CardText>
                        This is estimated using historical energy production data and the forecasted windspeeds in the area.
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default InfoCard;

