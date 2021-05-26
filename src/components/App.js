import { render } from '@testing-library/react';
import '../App.css';
import React from 'react';
import BreakInterval from './Break';
import TimerLength from './TimerLength';
import Timer from './Timer';



class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      breakLength: 5,
      timerLength: 25,
      timerMinute: 25,
      isPlay: false
    };

    this.onIncreasedBreakLength = this.onIncreasedBreakLength.bind(this);
    this.onDecreasedBreakLength = this.onDecreasedBreakLength.bind(this);
    this.onIncreaseTimerLength = this.onIncreaseTimerLength.bind(this);
    this.onDecreaseTimerLength = this.onDecreaseTimerLength.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayTimer = this.onPlayTimer.bind(this);
  }

  onIncreasedBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      }
    })
  }

  onDecreasedBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      }
    })    
  }

  onIncreaseTimerLength() {
    this.setState(prevState => {
      return {
        timerLength: prevState.timerLength + 1,
        timerLength: prevState.timerLength + 1
      };
    })
  }

  onDecreaseTimerLength() {
    this.setState(prevState => {
      return {
        timerLength: prevState.timerLength - 1,
        timerLength: prevState.timerLength - 1
      };
    })
  }

  onUpdateTimerMinute() {
    this.setState(prevState => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  onToggleInterval(isSession) {
    if(isSession){
      this.setState({
        timerMinute: this.state.timerLength
    })
    }
    else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
  }

  onResetTimer() {
    this.setState({
      timerMinute: this.state.timerLength
    })
  }

  onPlayTimer(isPlay) {
    this.setState({
      isPlay: isPlay
    })
  }

  render() {
      return (
    <main>
      <h2>pomodoro timer</h2>
      <section className="interval-length-container">
        <BreakInterval 
        isPlay={this.state.isPlay}
        breakInterval={this.state.breakLength} 
        increaseBreak={this.onIncreasedBreakLength}
        decreaseBreak={this.onDecreasedBreakLength}/>
        <TimerLength
        isPlay={this.state.isPlay} 
        timerLength={this.state.timerLength}
        increaseTime = {this.onIncreaseTimerLength}
        decreaseTime = {this.onDecreaseTimerLength}/>
      </section>

      <Timer 
      timerMinute={this.state.timerMinute}
      breakLength={this.state.breakLength}
      updateTimerMinute={this.onUpdateTimerMinute}
      toggleInterval={this.onToggleInterval}
      resetTimer={this.onResetTimer}
      playTimer={this.onPlayTimer}/>
    </main>
  );
  }

}

export default App;
