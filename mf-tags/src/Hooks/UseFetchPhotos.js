import React, { createContext, useState, useContext, useEffect } from 'react';

const PhotosContext = createContext();

export const PhotosProvider = ({ children }) => {
    const [photos, setPhotos] = useState(null); // Usamos `null` para verificar si se han cargado fotos

    useEffect(() => {
        const fetchPhotos = async () => {
            if (!photos) { // Si las fotos no están cargadas, se hace la llamada API
                try {
                    const response = await fetch("https://starwars-databank-server.vercel.app/api/v1/species");
                    const data = await response.json();
                    setPhotos(data.data);
                } catch (error) {
                    console.error("Error fetching photos:", error);
                }
            }
        };

        fetchPhotos();
    }, [photos]); // El efecto se ejecutará solo si `photos` es `null`

    return (
        <PhotosContext.Provider value={photos}>
            {children}
        </PhotosContext.Provider>
    );
};

export const usePhotos = () => {
    return useContext(PhotosContext);
};
