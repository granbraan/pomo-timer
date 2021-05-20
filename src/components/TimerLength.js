import React from 'react';

function TimerLength(props) {
    return (
        <section>
            <h4>activity length</h4>
            <section className="interval-container">
                <button>-</button>
                <p className="interval-length">{props.timerLength}</p>
                <button>+</button>
            </section>
        </section>


    );
}

export default TimerLength;