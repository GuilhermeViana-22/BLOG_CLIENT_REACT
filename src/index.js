import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './core.css'; // Importa o arquivo central de estilos
import Navbar from './Components/Navbar/navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);


