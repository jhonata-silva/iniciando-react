import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.scss';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre'; // Corrigido para 'Sobre'
import Login from './pages/Login'; // Corrigido para 'Login'
import Cadastro from './pages/Cadastro'; // Corrigido para 'Cadastro'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
