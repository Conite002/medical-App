import React from 'react'
import ReactApexChart from 'react-apexcharts';




class CustomChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: props.series,
        options: {
          chart: {
            width: props.width,
            type: 'pie',
          },
          labels: props.labels,
          theme: {
            monochrome: {
              enabled: true
            }
          },
          plotOptions: {
            pie: {
              dataLabels: {
                offset: -5
              }
            }
          },
          title: {
            text: props.title
          },
          dataLabels: {
            formatter(val, opts) {
              const name = opts.w.globals.labels[opts.seriesIndex]
              return [name, val.toFixed(1) + '%']
            }
          },
          legend: {
            show: false,
          },
          yaxis: {
            show: props.show
          }
          
        },
      
      
      };
    }

  

    render() {
      return ( 

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" />
            </div>

        );
    }
}

export default CustomChart;