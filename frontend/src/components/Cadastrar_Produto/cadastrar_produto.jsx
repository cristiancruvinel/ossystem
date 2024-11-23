import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cadastrar_produto.css';

function CadastroProdutoServico() {
  const [formData, setFormData] = useState({
    nome: '',
    tipo: 'Produto',
    valor: '',
  });
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'valor') {
      const formattedValue = formatValor(value);
      setFormData((prevData) => ({ ...prevData, [name]: formattedValue }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const formatValor = (value) => {
    value = value.replace(/\D/g, '');
    const floatValue = (parseFloat(value) / 100).toFixed(2); 
    return `R$ ${floatValue.replace('.', ',')}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch('http://localhost:5000/api/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          valor: parseFloat(formData.valor.replace('R$', '').replace(',', '.').trim())  
        })
      });
      if (response.ok) {
        setMensagem('Produto cadastrado com sucesso!');
        setFormData({ nome: '', valor: '', tipo_produto: '' });
      } else {
        setMensagem('Erro ao cadastrar produto.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      setMensagem('Erro ao cadastrar produto.');
    }
  };

  const isFormValid = formData.nome && formData.valor;

  return (
    <div className="cadastro-container">
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
      
      <div className="cadastro-box">
        <h2>Cadastro de Produto/Serviço</h2>
        <form onSubmit={handleSubmit}>
          <div className="full-width-input">
            <label>Nome:</label>
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
          </div>
          <div className="cadastro-row">
            <label>Tipo:</label>
            <div className="radio-options">
              <label>
                <input
                  type="radio"
                  name="tipo"
                  value="Produto"
                  checked={formData.tipo === 'Produto'}
                  onChange={handleChange}
                />
                Produto
              </label>
              <label>
                <input
                  type="radio"
                  name="tipo"
                  value="Serviço"
                  checked={formData.tipo === 'Serviço'}
                  onChange={handleChange}
                />
                Serviço
              </label>
            </div>
          </div>
          <div className="full-width-input">
            <label>Valor:</label>
            <input
              type="text"
              name="valor"
              value={formData.valor}
              onChange={handleChange}
              placeholder="R$ 0,00"
              required
            />
          </div>
          <button type="submit" disabled={!isFormValid}>Criar</button>
        </form>
        {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}
      </div>
      
      <footer className="footer">
        <p>© 2024 / Desenvolvido por Alexandre, Cristian e Luis</p>
      </footer>
    </div>
  );
}

export default CadastroProdutoServico;
