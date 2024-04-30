import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => (
    <div className="loading-container" style={{ textAlign: 'center', padding: '20px' }}>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
        </Spinner>
        <p>Cargando...</p>
    </div>
);

export default Loading;
