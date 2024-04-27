import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFetchPhotos } from '../Hooks/UseFetchPhotos';
import './CardStyled.css';

const CardsComponent = () => {
    const { photos, loading } = useFetchPhotos(); // Obtén el estado de carga desde useFetchPhotos
    const [photoDetails, setPhotoDetails] = useState({});

    // Función para guardar los detalles de una foto
    const savePhotoDetails = (id, details) => {
        setPhotoDetails({ ...photoDetails, [id]: details });
    };

    return (
        <div className="card-container">
            {loading ? (
                <div className="loading-spinner-container">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                photos.map((photo, index) => (
                    <CardItem key={index} photo={photo} savePhotoDetails={savePhotoDetails} />
                ))
            )}
        </div>
    );
};

const CardItem = ({ photo, savePhotoDetails }) => {
    // Al hacer clic en "Ver detalles", guardamos los detalles de la foto
    const handleClick = async () => {
        try {
            // Aquí podrías realizar una solicitud para obtener los detalles de la foto si no los tienes ya
            // const response = await fetch(`URL_DE_DETALLES/${photo._id}`);
            // const details = await response.json();
            // savePhotoDetails(photo._id, details);
        } catch (error) {
            console.error("Error fetching photo details:", error);
        }
    };

    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={photo.image} />
            <Card.Body>
                <Card.Title>{photo.name}</Card.Title>
                <Link to={`/detail/${photo._id}`}>
                    <Button variant="primary" onClick={handleClick}>Ver detalles</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default CardsComponent;
