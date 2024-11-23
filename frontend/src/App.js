import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/login.jsx';  // Corrigido para importar 'login.jsx'
import Home from './components/Home/home.jsx';    // Corrigido para importar 'home.jsx'
import Cadastro from './components/Cadastro/cadastro.jsx';  // Importando o componente Cadastro
import OrdemServico from './components/Ordem_Servico/ordem_servico.jsx';
import Logout from './components/Login/login.jsx';
import CriarOS from './components/Criar_OS/criar_os.jsx';
import ProdutosServicos from './components/Produtos_Servicos/produtos_servicos.jsx';
import Tecnicos from './components/Tecnicos/tecnicos.jsx';
import Configuracoes from './components/Configuracoes/configuracoes.jsx';
import './App.css';
import CadastroCliente from './components/Cadastro_Cliente/cadastro_cliente.jsx';
import PesquisarCliente from './components/Pesquisar_Cliente/pesquisar_cliente.jsx';

const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} /> {/* Rota padrão */}
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/ordem_servico" element={<OrdemServico />} />
            <Route path="/" element={<Logout />} /> {/* Rota padrão */}
            <Route path="/criar_os" element={<CriarOS/>} />
            <Route path="/produtos_servicos" element={<ProdutosServicos/>} />
            <Route path="/tecnicos" element={<Tecnicos />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/cadastro_cliente" element={<CadastroCliente/>}/>"
            <Route path="/pesquisar_cliente" element={<PesquisarCliente/>}/>
        </Routes>
    );
};

export default App;
