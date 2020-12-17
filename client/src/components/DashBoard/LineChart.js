import React, { Component } from 'react';
import { Line} from 'react-chartjs-2';

class LineChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bgColor: props.bgColor
    }

  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }

  async componentDidMount() {
    
    const resp= await fetch('http://localhost:8080/survey/users?by=country')
        .then((response) => response.json())

    var countCountry= {};
    resp.forEach(element => { 
        var count=element.count
        var country_name =element['Region']['Country'].name
        countCountry[country_name]=count
        
    });
    console.log(countCountry)
    var colors =[]
    for (var key in countCountry){
        var pos1=Math.floor(Math.random() * 255) + 1;
        var pos2=Math.floor(Math.random() * 255) + 1;
        colors.push('rgba(255,'+ pos1 +','+ pos2 +', 0.6)')
    }
    this.getChartData(countCountry,colors);
    // console.log(resp)
  }

  getChartData(countCountry,colors) {
    this.setState({
      chartData: {
        labels: Object.keys(countCountry),
        datasets: [
          {
            label: 'User Count',
            data: Object.values(countCountry),
            backgroundColor: colors
          }
        ]
      }
    })
  }

  render() {
    return (
      <>
        <Line
          data={this.state.chartData}
          width={600}
          height={150}
          options={{

            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,

              labels: {
                fontColor: this.state.bgColor,
                fontSize: 18
              }
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'User Count',
                  fontColor: this.state.bgColor,
                  fontSize:20
                },
                ticks: {
                  fontColor: this.state.bgColor,
                  fontSize: 20,


                }
              }],
              xAxes: [{
                ticks: {
                  fontColor: this.state.bgColor,
                  fontSize: 20,
                  stepSize: 1

                },
                scaleLabel: {
                  display: true,
                  labelString: 'Countries',
                  fontColor: this.state.bgColor,
                  fontSize:18
                },
              }]
            }

          }}
        />
      </>
    );
  }
}

export default LineChart;