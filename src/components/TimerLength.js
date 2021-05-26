import React from 'react';

function TimerLength(props) {
    function increaseTimer() {
        if(props.timerLength === 60) {
            return;
        }
        props.increaseTime();
    }
    function decreaseTimer() {
        if(props.timerLength === 1) {
            return;
        }
        props.decreaseTime();
    }
    return (
        <section>
            <h4>activity length</h4>
            <section className="interval-container">
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseTimer}>-</button>
                <p className="interval-length">{props.timerLength}</p>
                <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseTimer}>+</button>
            </section>
        </section>


    );
}

export default TimerLength;