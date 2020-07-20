import React, { Component } from 'react';

class Welcome extends Component {
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
export default Welcome;
