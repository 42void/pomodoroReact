import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timer:25,
      breaak:5,
      session:25,
      isSessionNow: true,
      isPausedNow: false
    };
    // Toggle the state every second
    // setInterval(() => {
    //   this.setState({ showText: !this.state.showText });
    // }, 1000);
  }

  render() {

    const plusSession = () => {
      var newSession = this.state.session + 1;
      if(this.state.isSessionNow){
        this.setState({session: newSession, timer: this.state.session})
      }else{
        this.setState({session: newSession})
      }
    }

    const minusSession = () => {
      var newSession = this.state.session - 1;
      if(this.state.isSessionNow){
        this.setState({session: newSession, timer: this.state.session})
      }else{
        this.setState({session: newSession})
      }
    }

    const plusBreak = () => {
      var newBreak = this.state.breaak + 1;
      if(this.state.isSessionNow){
        this.setState({breaak: newBreak})
      }else{
        this.setState({breaak: newBreak, timer: this.state.newBreak})
      }
    }

    const minusBreak = () => {
      var newBreak = this.state.breaak - 1;
      if(this.state.isSessionNow){
        this.setState({breaak: newBreak})
      }else{
        this.setState({breaak: newBreak, timer:this.state.newBreak})
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
          <div id="circle">
            <div id="session">
               SESSION
            </div>
            <div id="countDown">{this.state.timer}</div>
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
