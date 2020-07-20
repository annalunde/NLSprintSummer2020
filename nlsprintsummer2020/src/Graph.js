import React, { useState, useEffect, useRef } from 'react';
import CanvasJSReact, { CanvasJSChart } from './assets/canvasjs.react';

const Graph = ({ data }) => {
    console.table(data);

    const [dataPoints, setDataPoints] = useState([]);
    useEffect(() => {
        generateDataPoints(data);
    }, [data]);
    
    // hvos generateDataPoints er en funksjon du definerer i komponenten:
    const generateDataPoints = (data) => {
        const newData = [];
        for (let i = 0; i < data.length; i++) {
            newData.push({
                x: data[i], 
                y: data[i]
            });
        }
        setDataPoints(newData);
    }
    
   // const chart = useRef(chart);


    const options = {
        theme: "light4",
        title: {
            text: "Predicted Energy Production"
        },
        axisY: {
            title: "Energy Produced",
            suffix: "kWh ",
            includeZero: false
        },
        data: [{
            type: "line",
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "$#,##0.00",
            dataPoints: dataPoints
        }]
    }


    return (
        <div>
            <CanvasJSChart options={options}
               //onRef={ref => setRef(ref)}
                />
        </div>
    )
}
export default Graph;


/* var chart = this.chart;
console.table(data);
for (var i = 0; i < data.length; i++) {
    dataPoints.push({
        x: data[i],
        y: this.props.data[i]
    });
}
chart.render(); */


// function createChart = (dataPoints) => {
//     setRef(dataPoints);
// }



