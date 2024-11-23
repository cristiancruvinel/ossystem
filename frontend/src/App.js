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
import Clientes from './components/Clientes/clientes.jsx';
import Cadastro_Cliente from './components/Cadastro_Cliente/cadastro_cliente.jsx';
import Cadastrar_Produto from './components/Cadastrar_Produto/cadastrar_produto.jsx';
import Pesquisar_Cliente from './components/Pesquisar_Cliente/pesquisar_cliente.jsx';
import VisualizarProduto from './components/Visualizar_Produto/visualizar_produto.jsx';
import VisualizarTecnicos from './components/Visualizar_Tecnicos/visualizar_tecnicos.jsx';
import InformacoesEmpresa from './components/Informacoes_Empresa/informacoes_empresa.jsx';
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
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/cadastro_cliente" element={<Cadastro_Cliente />} />
            <Route path="/cadastrar_produto" element={<Cadastrar_Produto />} />
            <Route path="/pesquisar_cliente" element={<Pesquisar_Cliente />} />
            <Route path="/visualizar_produto" element={<VisualizarProduto />} />
            <Route path="/visualizar_tecnicos" element={<VisualizarTecnicos />} />
            <Route path="/informacoes_empresa" element={<InformacoesEmpresa />} />
            <Route path="/cadastro_cliente" element={<CadastroCliente/>}/>"
            <Route path="/pesquisar_cliente" element={<PesquisarCliente/>}/>
        </Routes>
    );
};

export default App;
