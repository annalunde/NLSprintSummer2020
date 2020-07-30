import React from 'react';
import {
    Card, CardHeader, CardBody,
    CardTitle, CardText, Button
} from 'reactstrap';
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from '../pictures/Info.svg';
import "./Welcome.css";

const Welcome = (props) => {
    return (   
        <div>
            <Card style={{
                width: '50%',
                position: 'absolute', left: '50%', top: '40%',
                transform: 'translate(-50%, -50%)'
            }} className='mt-5' >
                <CardHeader className="text-right header" >
                    <ReactLogo width={20} height={20} />
                </CardHeader>
                <CardBody className="text-center">
                    <CardTitle>Welcome to GreenForecast!</CardTitle>
                    <CardText>
                        This web application is a set of graphs, giving you insight into the
                        energy produced in a windmill park.
                    </CardText>
                    <CardText>
                        In the application, you can choose to see the forecasted weather and
                        the estimated production outcome derived from forecasted weather
                        data.
                    </CardText>
                    <Button bsClass="custom-button" size="lg" block>
                        <Link className="link" to="/wind">Go to windspeed predictions</Link></Button>
                    <Button className="button" size="lg" block>
                        <Link className="link" to="/wind">Go to predicted energy production</Link>
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Welcome;
