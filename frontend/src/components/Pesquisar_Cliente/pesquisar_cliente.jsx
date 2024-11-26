import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pesquisar_cliente.css';

const PesquisarCliente = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const navigate = useNavigate();

  const buscarCliente = async (nome) => {
    try {
      const response = await fetch(`http://localhost:5000/api/clientes?nome=${nome}`);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Erro ao buscar clientes: ', error);
      return [];
    }
  };
  
  
  const handleSearch = async () => {
    const clientes = await buscarCliente(pesquisa);
    setUsuarios(clientes);
  };

  const handleUserClick = (id) => {
    
    navigate(`/editar_cliente/${id}`);
    console.log(id);
  };

  return (
    <div className="pesquisar-cliente-container">
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
            key={usuario.id_cliente}
            className="resultado-card"
            onClick={() => handleUserClick(usuario.id_cliente)}
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
