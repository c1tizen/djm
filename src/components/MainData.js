import React, { Component } from 'react';
import Tabletop from 'tabletop';

class MainData extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '2PACX-1vRYU1EcMD-GP7U4y1s6NfkqPum8h07qlrGE-Fx-aFpJkH_LGz5o9QsTOBWfzV0-HU5nh74aVFW8VO0w',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    console.log('updated state --->', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React + Google Sheets Demo</h1>
        </header>
      </div>
    );
  }
}

export default MainData;