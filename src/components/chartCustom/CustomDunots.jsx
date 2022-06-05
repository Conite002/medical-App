import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class CustomDonuts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        plugins:{
          legend: {
            display: false
          }
        }
      },
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E'],
      display: false,
      legend: {
        display: false
      }
    }
  }

  

  render() {
    const legends={show : false}
    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.props.series || this.state.series}   type="donut" width="380" />
      </div>
    );
  }
}

export default CustomDonuts;