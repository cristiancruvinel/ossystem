import React, { useState, useEffect } from 'react';
import './visualizar_produto.css';

const VisualizarProdutos = () => {
  const [pesquisa, setPesquisa] = useState('');
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/produtos', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div className="visualizar-produtos-container">
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
      <div className="produtos-card">
        <h2>Visualizar Produtos</h2>
        <input
          type="text"
          placeholder="Pesquisar por Nome do Produto"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
        <div className="produtos-lista">
          {produtosFiltrados.map((produto) => (
            <div key={produto.id} className="produto-item">
              <p><strong>Tipo:</strong> {produto.tipo}</p>
              <p><strong>Nome:</strong> {produto.nome}</p>
              <p><strong>Preço:</strong> {produto.preco}</p>
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

export default VisualizarProdutos;
