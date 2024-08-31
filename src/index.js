import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import './Styles/core.css'; // Importa o arquivo central de estilos
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);


