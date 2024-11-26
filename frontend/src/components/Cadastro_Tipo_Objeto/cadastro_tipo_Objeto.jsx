import React, { useState } from 'react';
import './cadastro_tipo_objeto.css';

const CadastroTipoObjeto = () => {
  const [pesquisa, setPesquisa] = useState('');
  const [tiposDeObjeto, setTiposDeObjeto] = useState([
    'Notebook', 'Notebook e Carregador', 'Nobreak', 'Impressora', 'Roteador', 'Computador Completo'
  ]);

  const handleAdicionar = () => {
    if (pesquisa && !tiposDeObjeto.includes(pesquisa)) {
      setTiposDeObjeto([...tiposDeObjeto, pesquisa]);
      setPesquisa('');
    }
  };

  return (
    <div className="cadastro-tipo-objeto-container">
      <header className="header">
        <h1>Logo:</h1>
        <div className="links">
          <a href="/home"><p>HOME</p></a>
          <a href="/Login/login"><p>LOGOUT</p></a>
        </div>
      </header>

      <h2 className="titulo">Cadastro de Tipo de Objeto</h2>

      <div className="main-container">
        <div className="quadro-pesquisa">
          <input
            type="text"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            placeholder="Digite o nome do objeto"
          />
          <button onClick={handleAdicionar}>Adicionar</button>
        </div>

        <div className="quadro-opcoes">
          <h3>Opções de Objetos</h3>
          <ul>
            {tiposDeObjeto.map((objeto, index) => (
              <li key={index}>{objeto}</li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 / Desenvolvido por Alexandre, Cristian e Luis</p>
      </footer>
    </div>
  );
};

export default CadastroTipoObjeto;
