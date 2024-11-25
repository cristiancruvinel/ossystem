import React, { useState } from 'react';
import './visualizar_tecnicos.css';

const VisualizarTecnicos = () => {
  const [tecnicos, setTecnicos] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  const handleSearch = () => {
    const resultados = [
      { id: 1, nome: 'Alexandre', email: 'alexandre@email.com' },
      { id: 2, nome: 'Cristian', email: 'cristian@email.com' },
      { id: 3, nome: 'Luis', email: 'luis@email.com' },
    ];

    const filtrados = resultados.filter((tecnico) =>
      tecnico.nome.toLowerCase().includes(pesquisa.toLowerCase())
    );
    setTecnicos(filtrados);
  };

  return (
    <div className="visualizar-tecnicos-container">
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

      <div className="tecnicos-card">
        <h2>Visualizar Técnicos</h2>
        <input
          type="text"
          placeholder="Digite o nome do técnico"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
        <button onClick={handleSearch}>Pesquisar</button>

        <div className="resultados-container">
          {tecnicos.map((tecnico) => (
            <div key={tecnico.id} className="tecnico-item">
              <p><strong>Nome:</strong> {tecnico.nome}</p>
              <p><strong>Email:</strong> {tecnico.email}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 / Desenvolvido por Alexandre, Cristian e Luis</p>
      </footer>
    </div>
  );
};

export default VisualizarTecnicos;
