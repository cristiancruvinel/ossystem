import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './atendimento_os.css';

const AtendimentoOS = () => {
  const ordemServico = {
    numero: '004',
    cliente: 'João Silva',
    equipamento: 'Notebook',
    defeito: 'Tela quebrada',
    tecnico: 'Carlos Souza',
  };

  const [solucao, setSolucao] = useState('');
  const [itens, setItens] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
  const navigate = useNavigate();

  const handleAddItem = () => {
    const novoItem = {
      nome: 'Roteador',
      valor: 200,
      status: 'Em andamento',
    };
    const novosItens = [...itens, novoItem];
    setItens(novosItens);
  };

  const handleSolucaoChange = (e) => {
    setSolucao(e.target.value);
  };

  const handleStatusChange = (index, e) => {
    const updatedItens = [...itens];
    updatedItens[index].status = e.target.value;
    setItens(updatedItens);
  };

  const calculateTotal = () => {
    const total = itens.reduce((acc, item) => acc + item.valor, 0);
    setValorTotal(total);
  };

  const handleConfirm = () => {
    navigate('/home');
  };

  React.useEffect(() => {
    calculateTotal();
  }, [itens]);

  return (
    <div className="atendimento-os-container">
      <header className="header">
        <h1>Logo:</h1>
        <div className="links">
          <a href="/home"><p>HOME</p></a>
          <a href="/login"><p>LOGOUT</p></a>
        </div>
      </header>

      <h2 className="titulo">Atendimento de Ordem de Serviço {ordemServico.numero}</h2>

      <div className="quadro">
        <h3>Informações do cliente:</h3>
        <p>{ordemServico.cliente}</p>
      </div>

      <div className="quadro">
        <h3>Informações do equipamento:</h3>
        <p>{ordemServico.equipamento}</p>
      </div>

      <div className="quadro">
        <h3>Defeito relatado:</h3>
        <p>{ordemServico.defeito}</p>
      </div>

      <div className="quadro">
        <h3>Solução do defeito:</h3>
        <div className="solucao-box">
          <textarea
            value={solucao}
            onChange={handleSolucaoChange}
            placeholder="Descreva a solução..."
          />
          <input
            type="text"
            value={ordemServico.tecnico}
            disabled
            placeholder="Técnico responsável"
          />
          <select onChange={(e) => handleStatusChange(0, e)} value="Em andamento">
            <option>Em andamento</option>
            <option>Finalizado</option>
            <option>Aguardando peças</option>
          </select>
        </div>
      </div>

      <div className="quadro">
        <h3>Itens:</h3>
        <div className="itens-container">
          <div className="itens-list">
            {itens.map((item, index) => (
              <div key={index} className="item-box">
                <p>{item.nome}</p>
                <input
                  type="number"
                  value={item.valor}
                  disabled
                />
                <select
                  value={item.status}
                  onChange={(e) => handleStatusChange(index, e)}
                >
                  <option>Em andamento</option>
                  <option>Finalizado</option>
                  <option>Aguardando peças</option>
                </select>
              </div>
            ))}
          </div>
          <button className="add-item-btn" onClick={handleAddItem}>+</button>
        </div>
      </div>

      <div className="valor-total">
        <h3>Valor Total: R${valorTotal}</h3>
      </div>

      <div className="confirm-btn">
        <button onClick={handleConfirm}>Confirmar</button>
      </div>

      <footer className="footer">
        <p>© 2024 / Desenvolvido por Alexandre, Cristian e Luis</p>
      </footer>
    </div>
  );
};

export default AtendimentoOS;
