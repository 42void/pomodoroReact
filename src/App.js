import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timer:25*60,
      breaak:5,
      session:25,
      isSessionNow: true,
      isPausedNow: true,
    };
    // Toggle the state every second
    // setInterval(() => {
    //   this.setState({ showText: !this.state.showText });
    // }, 1000);
  }

  render() {

    console.log('isPausedNow?', this.state.isPausedNow);
    // console.log('intervalId', this.intervalId);
    console.log('timer', this.state.timer)

    const plusSession = () => {
      console.log('plusSession')
      var newSession = this.state.session + 1;
      if(this.state.isSessionNow){
        this.setState({session: newSession, timer: this.state.timer + 60})
      }else{
        this.setState({session: newSession})
      }
    }

    const minusSession = () => {
      var newSession = this.state.session - 1;
      if(this.state.isSessionNow){
        this.setState({session: newSession, timer: this.state.timer - 60})
      }else{
        this.setState({session: newSession})
      }
    }

    const plusBreak = () => {
      var newBreak = this.state.breaak + 1;
      if(this.state.isSessionNow){
        this.setState({breaak: newBreak})
      }else{
        this.setState({breaak: newBreak, timer: this.state.timer + 60})
      }
    }

    const minusBreak = () => {
      var newBreak = this.state.breaak - 1;
      if(this.state.isSessionNow){
        this.setState({breaak: newBreak})
      }else{
        this.setState({breaak: newBreak, timer:this.state.timer - 60})
      }
    }

    var formatSeconds = function(seconds){  //seconds to good format
      console.log('formatSeconds')
      var date = new Date(1970,0,1);
      date.setSeconds(seconds);
      return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    }

    const countDown = () => {
      if(this.state.isPausedNow){
        this.setState({isPausedNow:false})
        this.intervalId = setInterval(() => {
          if(this.state.timer > 0){
            var newTimer = this.state.timer - 1 // - 1 seconde
            this.setState({ timer: newTimer });

          }
        }, 1000);
      }else{
        this.setState({isPausedNow:true})
        clearInterval(this.intervalId)
      }
    }

    return (
      <div className="App">
        <div className="App-header">
          <h1 id="title">Pomodoro Clock</h1>
          <img src={'https://image.flaticon.com/icons/png/128/123/123223.png'} className="App-logo" alt="logo" />
        </div>

        <div id="setters">
          <div className="setter">
            <div className="setterTitle">BREAK LENGTH</div>
            <div className="plusOrMinus">
              <button className="item" id="breakMinus" onClick={minusBreak}>-</button>
              <div className="item" id="breakLength">{this.state.breaak}</div>
              <button className="item" id="breakPlus" onClick={plusBreak}>+</button>
            </div>
          </div>

          <div className="setter">
            <div className="setterTitle">SESSION LENGTH</div>
            <div className="plusOrMinus">
              <button className="item" id="sessionMinus" onClick={minusSession}>-</button>
              <div className="item" id="sessionLength">{this.state.session}</div>
              <button className="item" id="sessionPlus" onClick={plusSession}>+</button>
            </div>
          </div>
        </div>

        <div id="clock">
          <div id="circle" onClick={countDown}>
            <div id="session">
               SESSION
            </div>
            <div id="countDown">{formatSeconds(this.state.timer)}</div>
          </div>
        </div>

        <div id="resetButtonContainer">
          <div id="resetButton">
            RESET
          </div>
        </div>

      </div>
    );
  }
}

export default App;
