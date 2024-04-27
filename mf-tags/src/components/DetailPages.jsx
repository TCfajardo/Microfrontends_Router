import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = ({ photoDetails }) => {
    const { id } = useParams();
    const species = photoDetails[id];

    if (!species) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{species.name}</h2>
            <img src={species.image} alt={species.name} style={{ width: '90%', maxHeight: '500px', objectFit: 'cover' }} />
            <p>{species.description}</p>
        </div>
    );
};

export default DetailPage;
