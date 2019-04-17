import React, { Component } from 'react';

const TimeComponent = () =>{
    const time = new Date();
    return(
      <div className="Time-color">
      <h1>{time.toLocaleTimeString()}</h1>
      </div>
    );
  }
  

class Time extends Component {
    currentTime(){
        this.setState({
          time: new Date()
        });
      }
    componentWillMount(){
        setInterval(() => this.currentTime(), 1000)
    }
    render(){
        return (
            <TimeComponent/>            
        );
    }
}

export default Time;