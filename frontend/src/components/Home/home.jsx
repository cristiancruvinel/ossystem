import React from 'react';
import './home.css'; // Certifique-se de que o CSS está correto

function Home() {
    return (
        <>
            {/* Header */}
            <header className="header">
                <h1>Logo:</h1>
                <a href="/Login/login">
                    <p>LOGOUT</p>
                </a>
            </header>

            {/* Main content */}
            <div className="container">
                {/* Top row with 3 cards */}
                <div className="top-row">
                    <a href="../Ordem_Servico/ordem_servico" className="card">
                    <img src="../imagens/ordem_servico.png" alt="Ordem de serviço" className="card-image" />
                        <p>Ordem de serviço</p>
                    </a>
                    <a href="/Clientes/clientes" className="card">
                    <img src="../imagens/clientes.png" alt="Clientes" className="card-image" />
                        <p>Clientes</p>
                    </a>
                    <a href="/Produtos_Servicos/produtos_servicos" className="card">
                    <img src="../imagens/produtos_servicos.png" alt="Produtos - Serviços" className="card-image" />
                        <p>Produtos - Serviços</p>
                    </a>
                </div>

                {/* Bottom row with 2 cards */}
                <div className="bottom-row">
                    <a href="/Tecnicos/tecnicos" className="card">
                    <img src="../imagens/tecnicos.png" alt="Técnicos" className="card-image" />
                        <p>Técnicos</p>
                    </a>
                    <a href="/Configuracoes/configuracoes" className="card">
                    <img src="../imagens/configuracoes.png" alt="Configurações" className="card-image" />
                        <p>Configurações</p>
                    </a>
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
