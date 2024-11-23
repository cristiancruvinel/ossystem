import React from 'react';
import './clientes.css';

const CriarOS = () => {
    return (
        <div>
            {/* Header */}
            <header className="header">
                <h1>Logo:</h1>
                <div className="links">
                    <a href="/Home/home">
                        <p>HOME</p>
                    </a>
                    <a href="/Login/login">
                        <p>LOGOUT</p>
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <div className="container">
                <div className="top-row">
                    <a href="/Cadastro_Cliente/cadastro_cliente" className="card">
                        <img 
                            src="/imagens/adicionar_cliente.png" 
                            alt="Adicionar Cliente" 
                            className="card-image" 
                        />
                        <p>Cadastrar Novo Cliente</p>
                    </a>
                    <a href="/Pesquisar_Cliente/pesquisar_cliente" className="card">
                        <img 
                            src="/imagens/visualizar_clientes.png" 
                            alt="Pesquisar Cliente" 
                            className="card-image" 
                        />
                        <p>Visualizar Clientes</p>
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>© 2024 / Desenvolvido por Alexandre, Cristian e Luis</p>
            </footer>
        </div>
    );
};

export default CriarOS;
