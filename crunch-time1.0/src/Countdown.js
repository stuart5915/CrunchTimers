import React, { Component } from "react";
import "./App.css";
class StrongHiit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevName: null,
      name: "Introduction",
      nextName: "Demonstration",
      timerOn: false,
      timerStart: 60000,
      timerTime: 60000,
      timerTimePrev: 300000,
      timerTimeNext: 300000,
      helpScreen: false,
      locked: false
    };

    this.previousTimer = this.previousTimer.bind(this);
    this.nextTimer = this.nextTimer.bind(this);
    this.howTo = this.howTo.bind(this);
    this.handleLock = this.handleLock.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.name === "Introduction") {
      this.setState({
        timerTime: 60000,
        timerStart: 60000
      });
    } else if (this.state.name === "Demonstration") {
      this.setState({
        timerTime: 300000,
        timerStart: 300000
      });
    } else if (this.state.name === "Warm-up") {
      this.setState({
        timerTime: 300000,
        timerStart: 300000
      });
    } else if (this.state.name === "Transition") {
      this.setState({
        timerTime: 60000,
        timerStart: 60000
      });
    } else if (this.state.name === "Station1-Round1") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station1-Round2") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station1-Round3") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station2-Round1") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station2-Round2") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station2-Round3") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station3-Round1") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station3-Round2") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station3-Round3") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station4-Round1") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station4-Round2") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station4-Round3") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station5-Round1") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station5-Round2") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station5-Round3") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station6-Round1") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station6-Round2") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station6-Round3") {
      this.setState({
        timerTime: 40000,
        timerStart: 40000
      });
    } else if (this.state.name === "Station1-Rest1") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station1-Rest2") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station1-Transition1") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station2-Rest1") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station2-Rest2") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station2-Transition2") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station3-Rest1") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station3-Rest2") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station3-Transition3") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station4-Rest1") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station4-Rest2") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station4-Transition4") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station5-Rest1") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station5-Rest2") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station5-Transition5") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station6-Rest1") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station6-Rest2") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    } else if (this.state.name === "Station6-Transition6") {
      this.setState({
        timerTime: 20000,
        timerStart: 20000
      });
    }
  };

  previousTimer() {
    if (this.state.name === "Demonstration") {
      this.setState({
        prevName: null,
        name: "Introduction",
        nextName: "Demonstration",
        timerStart: 60000,
        timerTime: 60000
      });
    } else if (this.state.name === "Warm-up") {
      this.setState({
        prevName: "Introduction",
        name: "Demonstration",
        nextName: "Warm-up",
        timerStart: 300000,
        timerTime: 300000
      });
    } else if (this.state.name === "Transition") {
      this.setState({
        prevName: "Demonstration",
        name: "Warm-up",
        nextName: "Transition",
        timerStart: 300000,
        timerTime: 300000
      });
    } else if (this.state.name === "Station1-Round1") {
      this.setState({
        prevName: "Warm-up",
        name: "Transition",
        nextName: "Station1-Round1",
        timerStart: 60000,
        timerTime: 60000
      });
    } else if (this.state.name === "Station1-Rest1") {
      this.setState({
        prevName: "Transition",
        name: "Station1-Round1",
        nextName: "Station1-Rest1",
        timerStart: 40000,
        timerTime: 40000
      });
    }
  }

  nextTimer() {
    if (this.state.name === "Introduction") {
      this.setState({
        prevName: "Introduction",
        name: "Demonstration",
        nextName: "Warm-up",
        timerStart: 300000,
        timerTime: 300000
      });
    } else if (this.state.name === "Demonstration") {
      this.setState({
        prevName: "Demonstration",
        name: "Warm-up",
        nextName: "Transition",
        timerStart: 300000,
        timerTime: 300000
      });
    } else if (this.state.name === "Warm-up") {
      this.setState({
        prevName: "Warm-up",
        name: "Transition",
        nextName: "Station1-Round1",
        timerStart: 60000,
        timerTime: 60000
      });
    } else if (this.state.name === "Transition") {
      this.setState({
        prevName: "Transition",
        name: "Station1-Round1",
        nextName: "Station1-Rest1",
        timerStart: 40000,
        timerTime: 40000
      });
    } else if (this.state.name === "Station1-Round1") {
      this.setState({
        prevName: "Station1-Round1",
        name: "Station1-Rest1",
        nextName: "Station1-Round2",
        timerStart: 20000,
        timerTime: 20000
      });
    }
  }

  howTo() {
    if (this.state.helpScreen === false) {
      this.setState({
        helpScreen: true
      });
    } else {
      this.setState({
        helpScreen: false
      });
    }
  }

  handleLock() {
    if (this.state.locked === false) {
      this.setState({
        locked: true
      });
    } else {
      this.setState({
        locked: false
      });
    }
  }

  handleReset() {
    this.setState({
      prevName: null,
      name: "Introduction",
      nextName: "Demonstration",
      timerStart: 60000,
      timerTime: 60000,
      timerTimePrev: 300000,
      timerTimeNext: 300000,
      helpScreen: false,
      locked: false
    });
  }

  render() {
    const {
      timerTime,
      timerStart,
      timerOn,
      timerTimeNext,
      timerTimePrev
    } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let secondsPrev = (
      "0" +
      (Math.floor((timerTimePrev / 1000) % 60) % 60)
    ).slice(-2);
    let minutesPrev = ("" + Math.floor((timerTimePrev / 60000) % 60)).slice(-2);
    let secondsNext = (
      "0" +
      (Math.floor((timerTimeNext / 1000) % 60) % 60)
    ).slice(-2);
    let minutesNext = ("" + Math.floor((timerTimeNext / 60000) % 60)).slice(-2);

    if (this.state.timerTime === 0 && this.state.name === "Introduction") {
      this.setState({
        name: "Demonstration",
        prevName: "Introduction",
        nextName: "Warm-up",
        timerStart: 300000,
        timerTime: 300000
      });
    } else if (
      this.state.timerTime === 0 &&
      this.state.name === "Demonstration"
    ) {
      this.setState({
        prevName: "Demonstration",
        name: "Warm-up",
        nextName: "Transition",
        timerStart: 300000,
        timerTime: 300000
      });
    } else if (this.state.timerTime === 0 && this.state.name === "Warm-up") {
      this.setState({
        prevName: "Warm-up",
        name: "Transition",
        nextName: "Station1-Round1",
        timerStart: 60000,
        timerTime: 60000
      });
    }

    return (
      <div>
        {this.state.locked && (
          <div className="lockedTrue">
            <div className="lockedTrueBottom"></div>
          </div>
        )}
        {this.state.helpScreen && (
          <div className="helpBox">
            <h1>Layout</h1>
            <div className="helpBoxP">
              <h3>
                <b>Meet and Greet</b> - 1 min
                <br />
              </h3>
              <p>Explain the class</p>
              <h3>
                <b>Demonstration</b> - 5 min
              </h3>
              <p>Walk thorugh exercises chosen</p>
              <h3>
                <b>Warm up</b> - 5 min
              </h3>
              <p>Spread out on turf. Perform warmup exercises.</p>
              <h3>
                <b>Workout</b> - 18 min
              </h3>
              <p>
                6 stations. 3 rounds of work. 40 seconds/round. 20 seconds
                rest/round. After 3 rounds of work, participants transition to
                next station.
              </p>
              <h3>
                <b>Core and More</b> - 5 min
              </h3>
              <p>
                Transition to turf for a core workout. 4 rounds of work. 60
                seconds/round. 15 seconds rest/round.
              </p>
              <h3>
                <b>Cool Down</b> - 3 min
              </h3>
              <p>Perform cool down movements</p>
              <h3>
                <b>Total Time</b> - 38 min
              </h3>
            </div>
            <button onClick={this.howTo}>Close</button>
          </div>
        )}
        <div className="prevDiv">
          <div className={"x" + this.state.prevName}>
            {this.state.name !== "Introduction" && (
              <button className="prevButton" onClick={this.previousTimer}>
                {this.state.prevName}
                <br />
                {minutesPrev}:{secondsPrev}
              </button>
            )}
          </div>
          {this.state.name === "Introduction" && (
            <div className="introBg">
              <div className="introBgChild">
                <img src={require("./imgs/hiitzonetitle.png")} alt="" />
              </div>
              <div className="introBgChild2">
                <p>Strong</p>
              </div>
            </div>
          )}
        </div>
        <div className={"x" + this.state.name}>
          <div className="mainDiv">
            <div className="mainDivAdjust">
              <div>
                <h1 className="mainDivAdjust2">{this.state.name}</h1>
                <div className="Countdown-time">
                  {minutes}:{seconds}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nextDiv">
          <div className={"x" + this.state.nextName}>
            <button className="nextButton" onClick={this.nextTimer}>
              {this.state.nextName}
              <br />
              {minutesNext}:{secondsNext}
            </button>
          </div>
          <div className={"x" + this.state.nextName}>
            <div className="navMenu">
              <button className="leftButtonsNav" onClick={this.toggleMainMenu}>
                {/* main menu button. when you wanna make the main menu.. 
                do it in App.js. then show/hide this component based on some button click*/}
              </button>

              {timerOn === false &&
                (timerStart === 0 || timerTime === timerStart) && (
                  <button onClick={this.startTimer} className="leftButtonsNav">
                    <img src={require("./imgs/play.png")} alt="" />
                  </button>
                )}
              {timerOn === true && timerTime >= 0 && (
                <button onClick={this.stopTimer} className="leftButtonsNav">
                  <img src={require("./imgs/pause.png")} alt="" />
                </button>
              )}
              {timerOn === false &&
                (timerStart !== 0 &&
                  timerStart !== timerTime &&
                  timerTime !== 0) && (
                  <button onClick={this.startTimer} className="leftButtonsNav">
                    <img src={require("./imgs/play.png")} alt="" />
                  </button>
                )}

              <button className="middleButtonsNav" onClick={this.resetTimer}>
                <img src={require("./imgs/Restart.png")} alt="" />
              </button>

              <button
                className="rightButtonsNav"
                id="helpButton"
                onClick={this.howTo}
              >
                <img src={require("./imgs/howTo.png")} alt="" />
              </button>

              <button
                className="rightButtonsNav"
                id="lockButton"
                onClick={this.handleLock}
              >
                {this.state.locked && (
                  <img src={require("./imgs/locked.png")} alt="" />
                )}
                {this.state.locked === false && (
                  <img src={require("./imgs/unlocked.png")} alt="" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default StrongHiit;
