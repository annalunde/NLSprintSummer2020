import React from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Col
} from 'reactstrap';
import { ReactComponent as ReactLogo } from '../pictures/Info.svg';

const InfoCard = (props) => {

    return (
        <div >
            <Card className='mt-5 mr-0 ml-0 mb-0'>
                <CardHeader>
                    <Col className="text-right"><ReactLogo width={20} height={20} /></Col>
                    
                </CardHeader>
                <CardBody className="text-center">
                    <CardTitle></CardTitle>
                    <CardText>
                        The graph shows you a prediction of the energy production in a windmill park in kWh in the next X minutes. 
                        This is estimated using historical energy production data and the forecasted windspeed.
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default InfoCard;