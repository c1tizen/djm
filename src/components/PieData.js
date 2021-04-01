import React, { Component } from 'react';
import Chart from "react-google-charts";
import Tabletop from 'tabletop';

class PieData extends Component {
    constructor() {
      super()
      this.state = {
        data: []
      }
    }
  
    componentDidMount() {
      Tabletop.init({
        key: '1Le7hMqttAYMrj8YQ4lojO-rGVsh0MLyig7LWB7RwCuQ',
        callback: googleData => {
          this.setState({
            data: googleData
          })
        },
        simpleSheet: true
      })
    }
  
    render() {
      console.log('Updated state --->', this.state)
      const { data } = this.state
      return (
        <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading...</div>}
            data={[
                ['Language', 'Job offers'],
                ['Python', ],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7],
            ]}
            options={{
                title: 'My Daily Activities',
              }}
              rootProps={{ 'data-testid': '1' }}
        />      
      );
    }
  }
  
  export default PieData;