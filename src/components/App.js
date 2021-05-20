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
      timerMinute: 25
    };

    this.onIncreasedBreakLength = this.onIncreasedBreakLength.bind(this);
    this.onDecreasedBreakLength = this.onDecreasedBreakLength.bind(this);
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
  render() {
      return (
    <main>
      <h2>pomodoro timer</h2>
      <section className="interval-length-container">
        <BreakInterval 
        breakInterval={this.state.breakLength} 
        increaseBreak={this.onIncreasedBreakLength}
        decreaseBreak={this.onDecreasedBreakLength}/>
        <TimerLength timerLength={this.state.timerLength}/>
      </section>

      <Timer timerMinute={this.state.timerMinute} />
    </main>
  );
  }

}

export default App;
