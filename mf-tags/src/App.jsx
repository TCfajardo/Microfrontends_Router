import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardsComponent from './components/CardsComponents';
import { PhotosProvider } from './Hooks/UseFetchPhotos'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => (
    <PhotosProvider> 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CardsComponent />} />
            </Routes>
        </BrowserRouter>
    </PhotosProvider>
);

const root = createRoot(document.getElementById("app"));
root.render(<App />);