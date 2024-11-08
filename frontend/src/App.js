import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/login.jsx';  // Corrigido para importar 'login.jsx'
import './App.css';

const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} /> {/* Rota padrão */}
        </Routes>
    );
};

export default App;
