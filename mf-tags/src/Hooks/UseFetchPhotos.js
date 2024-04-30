import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear un nuevo contexto de React llamado `PhotosContext`.
// Los contextos permiten compartir datos entre componentes sin necesidad de pasar props explícitamente.
const PhotosContext = createContext();

// El proveedor `PhotosProvider` es responsable de encapsular la lógica de carga de fotos
// y proporcionar los datos a cualquier componente que se encuentre dentro de su alcance.
export const PhotosProvider = ({ children }) => {
    
    const [photos, setPhotos] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); 
    const [error, setError] = useState(null); 

    // `useEffect` se utiliza para cargar las fotos al montar el componente.
    // La lógica de carga se ejecuta solo si `photos` está vacío y no hay errores.
    useEffect(() => {
        const fetchPhotos = async () => {
            if (photos.length === 0 && !error) {
                try {
                    const response = await fetch("https://starwars-databank-server.vercel.app/api/v1/species"); 
                    const data = await response.json(); 
                    setPhotos(data.data || []);
                    setIsLoading(false); 
                } catch (e) {
                    setError(e);
                    console.error("Error fetching photos:", e);
                }
            }
        };

        fetchPhotos(); 
    }, [photos, error]); // Dependencias para que solo se ejecute una vez si no hay errores ni fotos

    // El proveedor `PhotosProvider` envuelve a sus hijos y les proporciona el contexto `PhotosContext`.
    // Se pasan los datos de fotos, estado de carga, y errores a través del contexto.
    return (
        <PhotosContext.Provider value={{ photos, isLoading, error }}>
            {children} 
        </PhotosContext.Provider>
    );
};

// Permite a los componentes usar el contexto para obtener fotos, estado de carga, y errores.
export const usePhotos = () => {
    const context = useContext(PhotosContext);

    if (context === undefined) {
        throw new Error("usePhotos must be used within a PhotosProvider");
    }

    return context; // Devuelve el contexto para uso en componentes
};
