import React, { useState, useEffect } from 'react';
import CounterMF from 'mfCounter/CounterMF';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage = () => {
    // Estado para controlar si el contador está inicializado
    const [isCounterInitialized, setIsCounterInitialized] = useState(false);

    // Simula la inicialización del contador después de 6 segundos
    useEffect(() => {
        // Crea un temporizador para establecer isCounterInitialized a true después de 6 segundos
        const timer = setTimeout(() => {
            setIsCounterInitialized(true);
        }, 6000);

        // Limpia el temporizador cuando el componente se desmonta o actualiza
        return () => clearTimeout(timer);
    }, []);

    // Renderiza el componente HomePage
    return (
        <div>
            {/* 
                Utiliza el ErrorBoundary para manejar errores en el componente CounterMF. 
                Pasa isCounterInitialized como una prop para indicar si el contador está inicializado.
            */}
            <ErrorBoundary isCounterInitialized={isCounterInitialized}>
                {/* 
                    Renderiza el componente CounterMF con initialCounter igual a 10.
                    CounterMF se mostrará solo si isCounterInitialized es true.
                */}
                <CounterMF initialCounter={10} />
            </ErrorBoundary>
        </div>
    );
};

export default HomePage;
