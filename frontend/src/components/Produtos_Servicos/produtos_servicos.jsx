import React from 'react';
import './produtos_servicos.css';

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
                    <a href="/cadastrar_produto" className="card">
                        <img 
                            src="/imagens/cadastrar_novo_produto.png" 
                            alt="Cadastrar Novo Produto" 
                            className="card-image" 
                        />
                        <p>Cadastrar Novo Produto</p>
                    </a>
                    <a href="/visualizar_produto" className="card">
                        <img 
                            src="/imagens/visualizar_produtos.png" 
                            alt="Visualizar Produtos" 
                            className="card-image" 
                        />
                        <p>Visualizar Produtos</p>
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
