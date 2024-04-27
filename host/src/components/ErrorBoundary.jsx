import React from 'react';

// Componente ErrorBoundary que maneja errores en sus componentes hijos
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        // Inicializa el estado hasError como false
        this.state = { hasError: false };
    }

    // Método estático que se llama después de que un componente lanza un error
    static getDerivedStateFromError(error) {
        // Establece hasError en true cuando se produce un error
        return { hasError: true };
    }

    // Renderiza el ErrorBoundary
    render() {
        // Verifica si hay un error o si el contador no está inicializado
        if (this.state.hasError || !this.props.isCounterInitialized) {
            // Muestra el mensaje de error si hay un error o el contador no está inicializado
            return <div style={{ color: 'red' }}>Counter not ready</div>;
        }
        // Si no hay error y el contador está inicializado, muestra los componentes hijos
        return this.props.children;
    }
}

export default ErrorBoundary;
