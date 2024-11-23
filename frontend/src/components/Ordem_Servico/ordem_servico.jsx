import React from 'react';
import './ordem_servico.css';

const OSPage = () => {
  return (
    <div>
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

      <div className="container">
        <div className="top-row">
          <a href="/criar_os" className="card">
            <img
              src="/imagens/criar_os.png"
              alt="Criar OS"
              className="card-image"
            />
            <p>Criar OS</p>
          </a>
          <a href="/visualizar-oss" className="card">
            <img
              src="/imagens/visualizar_OS.png"
              alt="Visualizar OSs"
              className="card-image"
            />
            <p>Visualizar OSs</p>
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 / Desenvolvido por Alexandre, Cristian e Luis</p>
      </footer>
    </div>
  );
};

export default OSPage;
