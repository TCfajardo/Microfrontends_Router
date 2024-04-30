import React from 'react';
import { useParams } from 'react-router-dom';
import { usePhotos } from '../Hooks/UseFetchPhotos';
import Loading from './Loading';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DetailComponent = () => {
    const { id } = useParams(); // Obtiene el ID de la URL
    const { photos, isLoading, error } = usePhotos(); // Usa el contexto para obtener fotos
    const navigate = useNavigate(); // Para navegar de vuelta

    if (isLoading) {
        return <Loading />; // Muestra el componente de carga mientras carga
    }

    if (error) {
        return <p>Error al cargar las fotos: {error.message}</p>; // Manejo de errores
    }

    // Encuentra el elemento por ID
    const photo = photos.find((item) => item._id === id);

    if (!photo) {
        return <p>No se encontró el elemento.</p>; // Manejo de caso cuando no se encuentra el elemento
    }

    return (
        <Card style={{ width: '100%', margin: '10px', textAlign: 'center' }}>
            <Card.Img variant="top" src={photo.image} style={{ maxWidth: '600px', margin: 'auto' }} />
            <Card.Body>
                <Card.Title>{photo.name}</Card.Title>
                <Card.Text>{photo.description}</Card.Text>
                <Button variant="primary" onClick={() => navigate(-1)}>Volver</Button> {/* Botón para regresar */}
            </Card.Body>
        </Card>
    );
};

export default DetailComponent;
