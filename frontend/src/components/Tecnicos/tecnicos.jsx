import React from 'react';
import './tecnicos.css';

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
                    <a href="/Login">
                        <p>LOGOUT</p>
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <div className="container">
                <div className="top-row">
                    <a href="/cadastro" className="card">
                        <img 
                            src="/imagens/adicionar_cliente.png" 
                            alt="Cadastrar Novo Tecnico" 
                            className="card-image" 
                        />
                        <p>Cadastrar Novo Tecnico</p>
                    </a>
                    <a href="/visualizar_tecnicos" className="card">
                        <img 
                            src="/imagens/visualizar_produtos.png" 
                            alt="Visualizar Tecnicos" 
                            className="card-image" 
                        />
                        <p>Visualizar Tecnicos</p>
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
