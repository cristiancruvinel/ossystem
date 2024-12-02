import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './editar_cliente.css'; // Arquivo CSS específico para esta tela

const EditarCliente = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    cidade: '',
    estado: ''
  });
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/clientes/${id}`);
        const data = await response.json();
        setFormData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchCliente();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/clientes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setMensagem('Cliente atualizado com sucesso!');
        navigate('/clientes');
      } else {
        setMensagem('Erro ao atualizar cliente.');
      }
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      setMensagem('Erro ao atualizar cliente.');
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

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

    
    <div className="editar-cliente-container">
      <h2>Editar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} readOnly/> 
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}/>
        </div>
        <div>
          <label>Telefone:</label>
          <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange}/>
        </div>
        <div>
          <label>Endereço:</label>
          <input type="text" name="endereco" value={formData.endereco} onChange={handleChange}/>
        </div>
        <div>
          <label>Cidade:</label>
          <input type="text" name="cidade" value={formData.cidade} onChange={handleChange}/>
        </div>
        <div>
          <label>Estado:</label>
          <input type="text" name="estado" value={formData.estado} onChange={handleChange}/>
        </div>
        <button type="submit">Atualizar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
    <footer className="footer">
        <p>© 2024 / Desenvolvido por Alexandre, Cristian e Luis</p>
      </footer>
  </div>
    
  );
};

export default EditarCliente;
