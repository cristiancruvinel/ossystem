import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/login.jsx';  // Corrigido para importar 'login.jsx'
import Home from './components/Home/home.jsx';    // Corrigido para importar 'home.jsx'
import Cadastro from './components/Cadastro/cadastro.jsx';  // Importando o componente Cadastro
import Ordem_Servico from './components/Ordem_Servico/ordem_servico.jsx';
import Logout from './components/Login/login.jsx';
import Criar_OS from './components/Criar_OS/criar_os.jsx';
import Produtos_Servicos from './components/Produtos_Servicos/produtos_servicos.jsx';
import Tecnicos from './components/Tecnicos/tecnicos.jsx';
import Configuracoes from './components/Configuracoes/configuracoes.jsx';
import './App.css';

const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} /> {/* Rota padrão */}
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/ordem_servico" element={<Ordem_Servico />} />
            <Route path="/" element={<Logout />} /> {/* Rota padrão */}
            <Route path="/criar_os" element={<Criar_OS />} />
            <Route path="/produtos_servicos" element={<Produtos_Servicos />} />
            <Route path="/tecnicos" element={<Tecnicos />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
    );
};

export default App;
