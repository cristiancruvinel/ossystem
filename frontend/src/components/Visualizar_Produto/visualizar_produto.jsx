import React, { useState } from 'react';
import './visualizar_produto.css';

const VisualizarProdutos = () => {
  const [pesquisa, setPesquisa] = useState('');
  const [produtos, setProdutos] = useState([
    { id: 1, tipo: 'Produto', nome: 'Placa Mãe ASUS', preco: 'R$ 950,00' },
    { id: 2, tipo: 'Produto', nome: 'Processador Ryzen 5 5600X', preco: 'R$ 1.300,00' },
    { id: 3, tipo: 'Serviço', nome: 'Montagem de PC', preco: 'R$ 200,00' },
  ]);

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div className="visualizar-produtos-container">
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
