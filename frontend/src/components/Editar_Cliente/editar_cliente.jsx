import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './editar_cliente.css'; // Arquivo CSS específico para esta tela

function CadastroCliente() {
  const [formData, setFormData] = useState({
    nome: '',
    cpfCnpj: '',
    telefone: '',
    email: '',
    endereco: '',
    cidade: '',
    estado: ''
  });
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'cpfCnpj') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: formatCpfCnpj(value)
      }));
    } else if (name === 'telefone') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: formatTelefone(value)
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const formatCpfCnpj = (value) => {
    value = value.replace(/\D/g, '');

    if (value.length <= 11) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
      return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
  };

  const formatTelefone = (value) => {
    value = value.replace(/\D/g, '');
    return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMensagem('Cliente cadastrado com sucesso!');
        setFormData({
          nome: '',
          cpfCnpj: '',
          telefone: '',
          email: '',
          endereco: '',
          cidade: '',
          estado: ''
        });
        setTimeout(() => navigate('clientes'), 2000);
      } else {
        const result = await response.json();
        setMensagem(result.error || 'Erro ao cadastrar cliente');
      }
    } catch (error) {
      setMensagem('Erro de conexão ao servidor');
    }
  };

const [estados, setEstados] = useState([]);
const [cidades, setCidades] = useState([]);

useEffect(() => {
  const fetchEstados = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/estados');
      const data = await response.json();
      setEstados(data);
    } catch (error) {
      console.error('Erro ao buscar estados:', error);
    }
  };

  fetchEstados();
}, []);

const fetchCidades = async (estadoId) => {
  try {
    const response = await fetch(`http://localhost:5000/api/cidades/${estadoId}`);
    const data = await response.json();
    setCidades(data);
  } catch (error) {
    console.error('Erro ao buscar cidades:', error);
  }
};

  
  const isFormValid = Object.values(formData).every((field) => field.trim() !== '');

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
        <h2>Cadastro de Cliente</h2>
        <form onSubmit={handleSubmit}>
          <div className="cadastro-row">
            <div>
              <label>Nome:</label>
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
            </div>
            <div>
              <label>CNPJ ou CPF:</label>
              <input type="text" name="cpfCnpj" value={formData.cpfCnpj} onChange={handleChange} maxLength={18} required />
            </div>
          </div>
          <div className="cadastro-row">
            <div>
              <label>Telefone:</label>
              <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} maxLength={15} required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="full-width-input">
            <label>Endereço:</label>
            <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} required />
          </div>
      <div className="cadastro-row">
      <div>
        <label>Estado:</label>
        <select name="estado" value={formData.estado} onChange={(e) => {
          handleChange(e);
          fetchCidades(e.target.value);
        }} required>
          <option value="">Selecione o estado</option>
          {estados.map((estado) => (
            <option key={estado.id} value={estado.id}>{estado.nome}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Cidade:</label>
        <select name="cidade" value={formData.cidade} onChange={handleChange} required>
          <option value="">Selecione a cidade</option>
          {cidades.map((cidade) => (
            <option key={cidade.id} value={cidade.nome}>{cidade.nome}</option>
          ))}
        </select>
      </div>
          </div>
          <button type="submit" disabled={!isFormValid}>Criar</button>
        </form>
        {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}
      </div>

      {/* Footer */}
      <footer className="footer">
                <p>© 2024 / Desenvolvido por Alexandre, Cristian e Luis</p>
            </footer>
    </div>
  );
}

export default CadastroCliente;
