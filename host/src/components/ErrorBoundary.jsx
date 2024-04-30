import React from 'react';

// Componente ErrorBoundary que maneja errores en sus componentes hijos
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    // Método estático que se llama después de que un componente lanza un error
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError || !this.props.isCounterInitialized) {
            return <div style={{ color: 'red' }}>Counter not ready</div>;
        }
        // Si no hay error y el contador está inicializado, muestra los componentes hijos
        return this.props.children;
    }
}

export default ErrorBoundary;
