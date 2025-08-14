import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'swiper/css';
import 'swiper/css/pagination';
import { BrowserRouter } from 'react-router-dom';   // ⬅️ novo

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>                         {/* ⬅️ obmotano */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
