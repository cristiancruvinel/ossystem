import React from 'react';
import './configuracoes.css';

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
                    <a href="/informacoes_empresa" className="card">
                        <img 
                            src="/imagens/informacoes_da_empresa.png" 
                            alt="Informacoes da empresa" 
                            className="card-image" 
                        />
                        <p>Informacoes da Empresa</p>
                    </a>
                    <a href="/..." className="card">
                        <img 
                            src="/imagens/cadastrar_tipo_de_objeto.png" 
                            alt="Cadastrar tipo de produto" 
                            className="card-image" 
                        />
                        <p>Cdastrar tipo de Objetivo</p>
                    </a>
                    <a href="/..." className="card">
                        <img 
                            src="/imagens/produtos_servicos.png" 
                            alt="Cadastrar tipo de OS" 
                            className="card-image" 
                        />
                        <p>Cadastrar tipo de OS</p>
                    </a>
                    <a href="/..." className="card">
                        <img 
                            src="/imagens/cadastrar_status.png" 
                            alt="Cadastrar Status" 
                            className="card-image" 
                        />
                        <p>Cadastrar Status</p>
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
