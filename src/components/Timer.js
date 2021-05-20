import React from 'react';
import TimerLength from './TimerLength';

class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            isSession: true, 
            timerSeconds: 0
        }
    }
    render() {
        return (
            <section>
                <section className="timer-container">
                    <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
                    <span classname="timer">{this.props.timerMinute}</span>
                    <span classname="timer">:</span>
                    <span classname="timer">{this.state.timerSeconds === 0 ? "00" : 
                    this.props.timerMinute < 10 ? "0" + 
                    this.state.timerSeconds : this.state.timerSeconds}
                    </span>
                </section>
                <section className="timer-actions">
                    <button>Start</button>
                    <button>Pause</button>
                    <button>Reset</button>
                </section>
            </section>

        )
    }
}

export default Timer;