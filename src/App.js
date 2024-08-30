import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Blog from './Pages/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        {/* Outras rotas podem ser adicionadas aqui */}
      </Routes>
    </Router>
  );
}

export default App;
