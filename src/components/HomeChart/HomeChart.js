import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import "./styles.css";

export const HomeChart = () => {
  return (
    <div className='homeChart'>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            height: "312",
            backgroundColor: "#2E2E2E"
          },
          title: {
            text: '',
            style: {
              color: '#ffffff'
            }
          },
          xAxis: {
            labels: {
              style: {
                color: '#ffffff'
              }
            },
            lineColor: '#ffffff'
          },
          yAxis: {
            labels: {
              style: {
                color: '#ffffff'
              }
            },
            lineColor: '#ffffff'
          },
          legend: {
            itemStyle: {
              color: '#ffffff'
            }
          },
          series: [{
            data: [[1, 2], [2, 3], [3, 4]],
          }, {
            data: [[1, 2], [2, 4], [3, 6]],
          }],
          plotOptions: {
            series: {
              marker: {
                enabled: false
              }
            }
          },
          credits: {
            enabled: false
          }
        }}
      />
    </div>
  );
}