import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Usando useNavigate no lugar de useHistory
import './pesquisar_cliente.css';

const PesquisarCliente = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Simular a pesquisa de usuários
    const resultados = [
      { id: 1, nome: 'João Silva' },
      { id: 2, nome: 'Maria Souza' },
      { id: 3, nome: 'Carlos Oliveira' },
    ];
    setUsuarios(resultados);
  };

  const handleUserClick = (id) => {
    // Redirecionar para os detalhes do usuário
    navigate(`/Detalhes_Usuario/detalhes_usuario/${id}`);
  };

  return (
    <div className="pesquisar-cliente-container">
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

      <div className="pesquisa-card">
        <h2>Pesquisar Cliente</h2>
        <input
          type="text"
          placeholder="Digite o nome do cliente"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
        <button onClick={handleSearch}>Pesquisar</button>
      </div>

      {/* Resultado da Pesquisa */}
      <div className="resultados">
        {usuarios.map((usuario) => (
          <div
            key={usuario.id}
            className="resultado-card"
            onClick={() => handleUserClick(usuario.id)}
          >
            <p>{usuario.nome}</p>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>© 2024 / Desenvolvido por Alexandre, Cristian e Luis</p>
      </footer>
    </div>
  );
};

export default PesquisarCliente;
