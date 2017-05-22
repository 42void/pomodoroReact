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
      sessionOrBreak: 'SESSION'
    };
  }

  render() {

    const {breaak, session, timer, isPausedNow, isSessionNow} = this.state;

    const plusSession = () => {
      if(isPausedNow){
        var newSession = session + 1;
        if(isSessionNow){
          this.setState({session: newSession, timer: timer + 60})
        }else{
          this.setState({session: newSession})
        }
      }
    }

    const minusSession = () => {
      if(session > 1 && isPausedNow){
        var newSession = session - 1;
        if(isSessionNow){
          this.setState({session: newSession, timer: timer - 60})
        }else{
          this.setState({session: newSession})
        }
      }

    }

    const plusBreak = () => {
      if(isPausedNow){
        var newBreak = breaak + 1;
        if(isSessionNow){
          this.setState({breaak: newBreak})
        }else{
          this.setState({breaak: newBreak, timer: timer + 60})
        }
      }
    }

    const minusBreak = () => {
      if(isPausedNow){
        if(breaak > 1){
          var newBreak = breaak - 1;
          if(isSessionNow){
            this.setState({breaak: newBreak})
          }else{
            this.setState({breaak: newBreak, timer:timer - 60})
          }
        }
      }
    }

    var formatSeconds = function(seconds){  //seconds to format hh:mm:ss
      var date = new Date(1970,0,1);
      date.setSeconds(seconds);
      return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    }

    var countDown = () => {
      if(this.state.isPausedNow){
        this.setState({isPausedNow:false})
        this.intervalId = setInterval(() => {
          if(this.state.timer > 0){
            var newTimer = this.state.timer - 1 // - 1 second
            this.setState({ timer: newTimer });
          }else if(this.state.timer === 0){
            if(this.state.isSessionNow === true){
              this.setState({isSessionNow:false})
              this.setState({sessionOrBreak:'BREAK'})
              this.setState({timer: this.state.breaak * 60})
            }else{
              this.setState({isSessionNow:true})
              this.setState({sessionOrBreak:'SESSION'})
              this.setState({timer: this.state.session * 60})
            }
          }
        }, 1000);
      }else{
        this.setState({isPausedNow:true})
        clearInterval(this.intervalId)
      }
    }

    const reset = () => {
      this.setState({session:25, breaak:5, timer:25*60})
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
               {this.state.sessionOrBreak}
            </div>
            <div id="countDown">{formatSeconds(this.state.timer)}</div>
          </div>
        </div>

        <div id="resetButtonContainer">
          <div id="resetButton" onClick={reset}>
            RESET
          </div>
        </div>

      </div>
    );
  }
}

export default App;
