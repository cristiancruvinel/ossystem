import React from 'react';
import { Link } from 'react-router-dom'; // Importando o Link para navegação
import './home.css';

function Home() {
    return (
        <>
            {/* Header */}
            <header className="header">
                <h1>Logo:</h1>
                <Link to="/login">
                    <p>LOGOUT</p>
                </Link>
            </header>

            {/* Main content */}
            <div className="container">
                {/* Top row with 3 cards */}
                <div className="top-row">
                    <Link to="/Ordem_Servico/ordem_servico" className="card">
                    <img src="./imagens/ordem_servico.png" alt="Ordem de serviço" className="card-image" />
                        <p>Ordem de serviço</p>
                    </Link>
                    <Link to="/clientes" className="card">
                    <img src="./imagens/clientes.png" alt="Clientes" className="card-image" />
                        <p>Clientes</p>
                    </Link>
                    <Link to="/produtos_servicos" className="card">
                    <img src="./imagens/produtos_servicos.png" alt="Produtos - Serviços" className="card-image" />
                        <p>Produtos - Serviços</p>
                    </Link>
                </div>

                {/* Bottom row with 2 cards */}
                <div className="bottom-row">
                    <Link to="/tecnicos" className="card">
                    <img src="./imagens/tecnicos.png" alt="Técnicos" className="card-image" />
                        <p>Técnicos</p>
                    </Link>
                    <Link to="/configuracoes" className="card">
                    <img src="./imagens/configuracoes.png" alt="Configurações" className="card-image" />
                        <p>Configurações</p>
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>© 2024 / Desenvolvido por Alexandre, Cristian e Luis</p>
            </footer>
        </>
    );
}

export default Home;
