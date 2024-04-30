import React from 'react';
import { PhotosProvider } from 'mfTags/useFetchPhotos'; 
import DetailComponent from 'mfTags/DetailComponent';

const DetailPage = () => (
    <PhotosProvider>
        <div style={{ textAlign: 'center' }}>
            <h1>Detalle</h1>
            <div style={{ padding: '2%' }}>
                <DetailComponent />
            </div>
        </div>
    </PhotosProvider>
);

export default DetailPage;
