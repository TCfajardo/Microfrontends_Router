import React, { useState, useEffect } from 'react';
import CounterMF from 'mfCounter/CounterMF';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage = () => {
    const [isCounterInitialized, setIsCounterInitialized] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsCounterInitialized(true);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <div>
            <ErrorBoundary isCounterInitialized={isCounterInitialized}>
                <CounterMF initialCounter={10} />
            </ErrorBoundary>
        </div>
    );
};

export default HomePage;
