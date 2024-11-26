import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './visualizar_Oss.css';


const VisualizarOSs = () => {
    const [ordensDeServico, setOrdensDeServico] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const osSimulada = [
        { id: 1, numero: '001', cliente: 'João Silva' },
        { id: 2, numero: '002', cliente: 'Maria Oliveira' },
        { id: 3, numero: '003', cliente: 'Carlos Santos' },
        { id: 4, numero: '004', cliente: 'Ana Paula' },
      ];
      setOrdensDeServico(osSimulada);
    }, []);
  
    const handleRedirect = (osId) => {
      navigate(`/Atendimento_OS/atendimento_os/${osId}`);
    };
  
    return (
        <div className="visualizar-oss-container">
        <header className="header">
          <h1>Logo:</h1>
          <div className="links">
            <a href="/home"><p>HOME</p></a>
            <a href="/login"><p>LOGOUT</p></a>
          </div>
        </header>
      
        <div className="quadro-resultados">
          <h2 className="titulo">Listagem de OSs</h2>
          <div className="oss-listagem">
            {ordensDeServico.slice(0, 3).map((os) => (
              <button
                key={os.id}
                className="os-card"
                onClick={() => handleRedirect(os.id)}
              >
                Ordem de Serviço: {os.numero} - {os.cliente}
              </button>
            ))}
          </div>
      
          {ordensDeServico.length > 3 && (
            <div className="scroll-area">
              {ordensDeServico.slice(3).map((os) => (
                <button
                  key={os.id}
                  className="os-card"
                  onClick={() => handleRedirect(os.id)}
                >
                  Ordem de Serviço: {os.numero} - {os.cliente}
                </button>
              ))}
            </div>
          )}
        </div>
      
        <footer className="footer">
          <p>© 2024 / Desenvolvido por Alexandre, Cristian e Luis</p>
        </footer>
      </div>
    );
  };
  
  export default VisualizarOSs;
