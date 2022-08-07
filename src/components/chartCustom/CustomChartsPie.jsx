import React from 'react'
import ReactApexChart from 'react-apexcharts';




class CustomChartsPie extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [42, 47, 52, 58, 65],
        options: {
          chart: {
            width: '380',
            type: 'polarArea',
          },
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
          fill: {
            opacity: 1
          },
          theme: {
            monochrome: {
              enabled: true,
              shadeTo: 'light',
              shadeIntensity: 0.6
            }
          },
          plotOptions: {
            polarArea: {
              rings: {
                strokeWidth: 0
              },
              spokes: {
                strokeWidth: 0
              },
            }
          },
          
          dataLabels: {
            formatter(val, opts) {
              const name = opts.w.globals.labels[opts.seriesIndex]
              return [name, val.toFixed(1) + '%']
            }
          },
          yaxis: {
            show: false
          },
          legend: {
            position: 'bottom'
          },
          
        },
      
      
      };
    }

  

    render() {
      return ( 

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="polarArea" />
            </div>

        );
    }
}

export default CustomChartsPie;