import React, { createContext, useContext, useState, useEffect } from 'react';

const PhotosContext = createContext();

export const PhotosProvider = ({ children }) => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            if (photos.length === 0 && !error) {
                try {
                    const response = await fetch("https://starwars-databank-server.vercel.app/api/v1/species");
                    const data = await response.json();
                    setPhotos(data.data || []); // Asegúrate de que es un array
                    setIsLoading(false);
                } catch (e) {
                    setError(e);
                    console.error("Error fetching photos:", e);
                }
            }
        };

        fetchPhotos();
    }, [photos, error]);

    return (
        <PhotosContext.Provider value={{ photos, isLoading, error }}>
            {children}
        </PhotosContext.Provider>
    );
};

export const usePhotos = () => {
    const context = useContext(PhotosContext);

    if (context === undefined) {
        throw new Error("usePhotos must be used within a PhotosProvider");
    }

    return context;
};
