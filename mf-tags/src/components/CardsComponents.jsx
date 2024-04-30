import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { usePhotos } from '../Hooks/UseFetchPhotos';
import Loading from './Loading';
import './CardStyled.css';

const CardsComponent = () => {
    const photos = usePhotos();

    // Si no hay fotos, mostramos el componente de carga
    if (!photos) {
        return <Loading />;
    }

    return (
        <div className="card-container">
            {photos.map((photo, index) => (
                <Card key={index} style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src={photo.image} />
                    <Card.Body>
                        <Card.Title>{photo.name}</Card.Title>
                        <Link to={`/detail/${photo._id}`}>
                            <Button variant="primary">Ver detalles</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default CardsComponent;