import React from 'react';
import './criar_os.css';

const CriarOS = () => {
    return (
        <div>
            {/* Header */}
            <header className="header">
                <h1>Logo:</h1>
                <div className="links">
                    <a href="/home">
                        <p>HOME</p>
                    </a>
                    <a href="/login">
                        <p>LOGOUT</p>
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <div className="container">
                <div className="top-row">
                    <a href="/adicionar-cliente" className="card">
                        <img 
                            src="/imagens/clientes.png" 
                            alt="Adicionar Cliente" 
                            className="card-image" 
                        />
                        <p>Adicionar Cliente</p>
                    </a>
                    <a href="/cadastrar-novo-cliente" className="card">
                        <img 
                            src="/imagens/adicionar_cliente.png" 
                            alt="Cadastrar Novo Cliente" 
                            className="card-image" 
                        />
                        <p>Cadastrar Novo Cliente</p>
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
