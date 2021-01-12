import React from 'react';
import ReactDOM from 'react-dom';
import {VictoryLine, VictoryChart, VictoryAxis, VictoryTooltip} from 'victory';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.numz = 0;
    this.state = {
      lineData: this.getLineData()
    };
  }

  componentDidMount() {
    // Create pointer variable 'self' so JavaScript will point to the right object
    // when it is inside the jQuery method
    var self = this;
    $("#btnTest").click(function() {
      if(self.numz == 1){
        
        $(this).html("Remove data");
      }
      else{
        $(this).html("Add data");
      }
      self.setState({
        lineData: self.getLineData()
      });
  
    });

  }

  // Time-series data works best with scatter, line data is easy to use

  getLineData() {
    var d1 = [{ x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 6 }]

    var d2 = [{ x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 6 },
      { x: 10, y: 12 },
      { x: 12, y: 13 },
      { x: 13, y: 15 },
      { x: 14, y: 14 },
      { x: 15, y: 16 }]

    if(this.numz == 0){
      this.numz++;
      return d1;
    }
    else if(this.numz == 1){
      this.numz = 0;
      return d2;
    }
  }

  render() {
    return (
      // Remove the delay from chart generation and set duration of the effect
      <VictoryChart animate={{onLoad: {delay: 0, duration: 1500}, easing: "circleInOut"}}>
        <VictoryLine
        animate={{
          onEnter: {
            duration: 500
          }
        }}
          data={this.state.lineData}
          style={{
            data: {
              fill: "#c43a31",
              opacity: 1.0
            }
          }}
        />
        <VictoryAxis
          label="Y-Axis"
        />
        <VictoryAxis dependentAxis
          label="X-Axis"
        />
      </VictoryChart>
    
    
    );
    
  }
}

const app = document.getElementById('chartcontainer');
ReactDOM.render(<App />, app);