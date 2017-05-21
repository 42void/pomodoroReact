import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
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
              <button className="item" id="breakMinus">-</button>
              <div className="item" id="breakLength"></div>
              <button className="item" id="breakPlus">+</button>
            </div>
          </div>

          <div className="setter">
            <div className="setterTitle">SESSION LENGTH</div>
            <div className="plusOrMinus">
              <button className="item" id="sessionMinus">-</button>
              <div className="item" id="sessionLength"></div>
              <button className="item" id="sessionPlus">+</button>
            </div>
          </div>
        </div>

        <div id="clock">
          <div id="circle">
            <div id="session">
               SESSION
            </div>
            <div id="countDown"></div>
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
