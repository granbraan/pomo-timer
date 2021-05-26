import React from 'react';
import TimerLength from './TimerLength';


class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            isSession: true, 
            timerSeconds: 0,
            intervalID: 0
        };

        this.startTimer= this.startTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }
    startTimer() {
        let intervalID = setInterval(this.decreaseTimer, 1000);
        this.props.playTimer(true);
        this.setState({
            intervalID: intervalID
        })
    }

    pauseTimer() {
        clearInterval(this.state.intervalID);
        this.props.playTimer(false);
    }

    resetTimer() {
        this.pauseTimer();
        this.props.resetTimer();
        this.props.playTimer(false);
        this.setState({
            timerSeconds: 0,
            isSession: true
        })
    }

    decreaseTimer() {
        switch(this.state.timerSeconds) {
            case 0:
                if(this.props.timerMinute === 0) {
                    if(this.state.isSession) {
                        this.setState({
                            isSession: false
                        });

                        this.props.toggleInterval(this.state.isSession);
                    }
                    else {
                        this.setState({
                            isSession: true
                        });
                        this.props.toggleInterval(this.state.isSession)
                    }

                }
                else {
                    this.props.updateTimerMinute()
                    this.setState({
                        timerSeconds: 59
                    })
                }
                break;
            default:
                this.setState(prevState => {
                    return {
                        timerSeconds: prevState.timerSeconds - 1
                    }
                })
                break;
        }
    }

    render() {
        return (
            <section>
                <section className="timer-container">
                    <h4>{this.state.isSession === true ? "Timer" : "Break"}</h4>
                    <span classname="timer">{this.props.timerMinute}</span>
                    <span classname="timer">:</span>
                    <span classname="timer">{
                    this.state.timerSeconds === 0 ? "00" : 
                    this.state.timerSeconds < 10 ? 
                   "0" + this.state.timerSeconds : this.state.timerSeconds}
                    </span>
                </section>
                <section className="timer-actions">
                    <button onClick={this.startTimer}>Start</button>
                    <button onClick={this.pauseTimer}>Pause</button>
                    <button onClick={this.resetTimer}>Reset</button>
                </section>
            </section>

        )
    }
}

export default Timer;