import React, { Component } from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row, Col
} from 'reactstrap';
import { ReactComponent as ReactLogo } from '../pictures/Info.svg';

const Welcome = (props) => {
    return (
        <div>
            <Card style={{ width: '50%' ,
        position: 'absolute', left: '50%', top: '40%',
        transform: 'translate(-50%, -50%)'
    }} className='mt-5' >
                <CardHeader className="text-right">
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
                    <CardText>
                        You can also check out historical data from the park, and compare
                        forecasted production values to actual production values, giving you
                        insight into the accuracy of the prediction model we in
                        GreenForecast have created.
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default Welcome;

/* class Welcome extends Component {
    render() {
        return (
            <div>
                <main style={{ marginTop: "64px" }} className='Welcome'>
                    <p>Welcome to GreenForecast!</p>
                    <p>
                        This web application is a set of graphs, giving you insight into the
                        energy produced in a windmill park
          </p>
                    <p>
                        In the application, you can choose to see the forecasted weather and
                        the estimated production outcome derived from forecasted weather
                        data.
          </p>
                    <p>
                        You can also check out historical data from the park, and compare
                        forecasted production values to actual production values, giving you
                        insight into the accuracy of the prediction model we in
                        GreenForecast have created.
          </p>
                </main>
            </div>
        )
    }
}
export default Welcome; */
