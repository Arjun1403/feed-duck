import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class PieChart extends Component {

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
    
    const resp= await fetch('http://localhost:8080/survey/ducks?by=timePeriod')
        .then((response) => response.json())

    var sumTime= {};
    resp.forEach(element => { 
        var sumCount=element.sum
        var timePeriod =element.timePeriod
        sumTime[timePeriod]=sumCount
        
    });
    console.log(sumTime)
    var colors =[]
    for (var key in sumTime){
        var pos1=Math.floor(Math.random() * 255) + 1;
        var pos2=Math.floor(Math.random() * 255) + 1;
        colors.push('rgba(255,'+ pos1 +','+ pos2 +', 0.6)')
    }
    this.getChartData(sumTime,colors);
    // console.log(resp)
  }

  getChartData(sumTime,colors) {
    this.setState({
      chartData: {
        labels: Object.keys(sumTime),
        datasets: [
          {
            label: 'Duck Count',
            data: Object.values(sumTime),
            backgroundColor: colors
          }
        ]
      }
    })
  }


  render() {
    return (
      <>
        <Pie
          data={this.state.chartData}
          width={600}
          height={160}
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
                  labelString: 'Total Ducks Feed',
                  fontColor: this.state.bgColor
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
                  labelString: 'Time Range',
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

export default PieChart;