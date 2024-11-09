import React, { useState } from 'react';
import './cadastro.css';

function Cadastro() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [feedback, setFeedback] = useState('');

    // Função para validar o cadastro
    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setFeedback('As senhas não coincidem!');
            return;
        }

        // Adicione aqui a lógica para enviar os dados ao backend, se necessário
        setFeedback('Cadastro realizado com sucesso!');
        // Redirecionamento ou outras ações após cadastro
    };

    return (
        <>
            {/* Header */}
            <header className="header">
                <h1>Logo:</h1>
            </header>

            {/* Cadastro Form */}
            <div className="cadastro-container">
                <h2>Cadastre-se</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Email</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Usuário"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Senha"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label htmlFor="confirmPassword">Confirme a senha:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirme a Senha"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <button type="submit">Cadastre-se</button>
                </form>
                {/* Feedback */}
                <div id="feedback" className="feedback">
                    {feedback}
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>© 2024 / Desenvolvido por Alexandre, Cristian e Luis</p>
            </footer>
        </>
    );
}

export default Cadastro;
