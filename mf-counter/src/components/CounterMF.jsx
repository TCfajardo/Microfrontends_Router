import React, { useState, useEffect } from 'react';
import './CounterMF.css';

const CounterMF = ({ initialCounter }) => {
    const [counter, setCounter] = useState(initialCounter);

    useEffect(() => {
        setCounter(initialCounter);
    }, [initialCounter]);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    };

    const getCounterColor = () => {
        if (counter < 0) {
            return 'red';
        } else if (counter === 0 || counter > 0) {
            return 'green';
        }
    };

    return (
        <div className="container"> 
            <h3>Counter MF</h3>
            <div className="button-container">
                <button className="button increment" onClick={handleIncrement}>+</button>
                <h4 className="counter" style={{ color: getCounterColor() }}>{counter}</h4>
                <button className="button decrement" onClick={handleDecrement}>-</button>
            </div>
        </div>
    );
};

export default CounterMF;
