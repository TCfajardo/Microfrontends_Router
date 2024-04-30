import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear un nuevo contexto de React llamado `PhotosContext`.
// Los contextos permiten compartir datos entre componentes sin necesidad de pasar props explícitamente.
const PhotosContext = createContext();

// El proveedor `PhotosProvider` es responsable de encapsular la lógica de carga de fotos
// y proporcionar los datos a cualquier componente que se encuentre dentro de su alcance.
export const PhotosProvider = ({ children }) => {
    // Declarar estados para fotos, estado de carga, y errores.
    const [photos, setPhotos] = useState([]); // Inicialmente es un arreglo vacío.
    const [isLoading, setIsLoading] = useState(true); // Estado para indicar si se están cargando las fotos.
    const [error, setError] = useState(null); // Estado para almacenar errores potenciales.

    // `useEffect` se utiliza para cargar las fotos al montar el componente.
    // La lógica de carga se ejecuta solo si `photos` está vacío y no hay errores.
    useEffect(() => {
        const fetchPhotos = async () => {
            if (photos.length === 0 && !error) { // Solo cargar si no hay fotos ni errores
                try {
                    const response = await fetch("https://starwars-databank-server.vercel.app/api/v1/species"); // Hacer fetch a la API
                    const data = await response.json(); // Parsear la respuesta
                    setPhotos(data.data || []); // Almacenar las fotos en el estado
                    setIsLoading(false); // Marcar como cargado
                } catch (e) {
                    setError(e); // Capturar errores y almacenarlos
                    console.error("Error fetching photos:", e); // Mostrar error en consola
                }
            }
        };

        fetchPhotos(); // Llamar a la función para cargar las fotos
    }, [photos, error]); // Dependencias para que solo se ejecute una vez si no hay errores ni fotos

    // El proveedor `PhotosProvider` envuelve a sus hijos y les proporciona el contexto `PhotosContext`.
    // Se pasan los datos de fotos, estado de carga, y errores a través del contexto.
    return (
        <PhotosContext.Provider value={{ photos, isLoading, error }}>
            {children} // Los componentes hijos tendrán acceso al contexto
        </PhotosContext.Provider>
    );
};

// `usePhotos` es un hook personalizado para acceder a `PhotosContext`.
// Permite a los componentes usar el contexto para obtener fotos, estado de carga, y errores.
export const usePhotos = () => {
    const context = useContext(PhotosContext); // Obtener el contexto

    // Si el contexto no está definido (no se está utilizando dentro de `PhotosProvider`),
    // arrojar un error para evitar uso incorrecto.
    if (context === undefined) {
        throw new Error("usePhotos must be used within a PhotosProvider");
    }

    return context; // Devuelve el contexto para uso en componentes
};
