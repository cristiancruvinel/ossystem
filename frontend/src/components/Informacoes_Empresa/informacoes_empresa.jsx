import React, { useState } from 'react';
import './informacoes_empresa.css';

function InformacoesEmpresa() {
  const [formData, setFormData] = useState({
    nome: '',
    cpfCnpj: '',
    telefone: '',
    email: '',
    endereco: '',
    cidade: '',
    estado: '',
    logo: null,
  });
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'cpfCnpj') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: formatCpfCnpj(value),
      }));
    } else if (name === 'telefone') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: formatTelefone(value),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, logo: file }));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem('Informações atualizadas com sucesso!');
  };

  const isFormValid = Object.values(formData).every((field) => field !== '' || field === formData.logo);

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
        <h2>Informações da Empresa</h2>
        <form onSubmit={handleSubmit}>
          <div className="cadastro-row">
            <div>
              <label>Nome:</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>CNPJ ou CPF:</label>
              <input
                type="text"
                name="cpfCnpj"
                value={formData.cpfCnpj}
                onChange={handleChange}
                maxLength={18}
                required
              />
            </div>
          </div>
          <div className="cadastro-row">
            <div>
              <label>Telefone:</label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                maxLength={15}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="full-width-input">
            <label>Endereço:</label>
            <input
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cadastro-row">
            <div>
              <label>Cidade:</label>
              <input
                type="text"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Estado:</label>
              <input
                type="text"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="full-width-input">
            <label>Adicionar Logo:</label>
            <input type="file" onChange={handleLogoUpload} />
          </div>
          <button type="submit" disabled={!isFormValid}>
            Atualizar
          </button>
        </form>
        {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}
      </div>

      <footer className="footer">
        <p>© 2024 / Desenvolvido por Alexandre, Cristian e Luis</p>
      </footer>
    </div>
  );
}

export default InformacoesEmpresa;
