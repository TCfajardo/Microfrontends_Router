import { useEffect, useState } from "react";

export const useFetchPhotos = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const getPhotos = async () => {
            try {
                const response = await fetch("https://starwars-databank-server.vercel.app/api/v1/species");
                const data = await response.json();
                setPhotos(data.data);
            } catch (error) {
                console.error("Error fetching photos:", error);
            }
        };

        getPhotos();
    }, []);

    return { photos };
};
