import React, { Component } from 'react';
import Tabletop from 'tabletop';
import "./MainData.css"

class MainData extends Component {
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
      <div className="MainData">
        <div id="dataRows">
          {
            data.map(obj => {
              return (
                <div className="inlineDiv" key={obj.g_prof_url}>
                    <i className={obj.g_prof_icon}></i>
                    <p>{obj.g_prof_name}</p>
                    <p>{obj.g_prof_count.slice(8)}</p>
                    <br />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default MainData;