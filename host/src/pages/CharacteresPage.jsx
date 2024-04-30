import React from 'react';
import CardsComponent from 'mfTags/CardsComponent';
import { PhotosProvider } from 'mfTags/useFetchPhotos'; 

const CharacteresPage = () => (
    <PhotosProvider> 
        <div style={{ textAlign: 'center' }}>
            <h1>Gallery</h1>
            <div style={{ padding: '4%' }}>
                <CardsComponent />
            </div>
        </div>
    </PhotosProvider>
);

export default CharacteresPage;