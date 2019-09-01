import React, { Component } from "react";
import StrongHiit from "./Countdown";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainMenu: "mainMenuOn",
      strongHiit: "strongHiitOff"
    };

    this.handleStrong = this.handleStrong.bind(this);
  }

  handleStrong() {
    if (this.state.strongHiit === "strongHiitOff") {
      this.setState({
        strongHiit: "strongHiitOn",
        mainMenu: "mainMenuOff"
      });
    } else if (this.state.strongHiit === "strongHiitOn") {
      this.setState({
        strongHiit: "strongHiitOff",
        mainMenu: "mainMenuOn"
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className={this.state.mainMenu}>
          <h1>Crunch Timers</h1>
          <button onClick={this.handleStrong} className={this.state.mainMenu}>
            StrongHIIT
          </button>
        </div>

        <div className={this.state.strongHiit}>
          <StrongHiit />
        </div>

        {this.state.strongHiit === "strongHiitOn" && (
          <button className="mainMenuButtonOn" onClick={this.handleStrong}>
            <img src={require("./imgs/mainMenu.png")} alt="" />
          </button>
        )}
      </div>
    );
  }
}
export default App;
