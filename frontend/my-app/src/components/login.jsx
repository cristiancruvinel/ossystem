import React, { useState } from 'react';
import './login.css';

function Login() {
    const [feedback, setFeedback] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const login = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === '1234') {
            setFeedback('Login bem-sucedido!');
            setIsSuccess(true);

            setTimeout(() => {
                window.location.href = '/home'; // Redireciona para a página inicial
            }, 1000);
        } else {
            setFeedback('Usuário ou senha incorretos');
            setIsSuccess(false);
        }
    };

    return (
        <>
            {/* Header */}
            <header className="header">
                <h1>Logo:</h1>
            </header>

            {/* Main content */}
            <div className="login-container">
                <h2>Login</h2>
                <label htmlFor="username">Email:</label>
                <input type="text" id="username" placeholder="Usuário" required />
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" placeholder="Senha" required />
                <button onClick={login}>Entrar</button>
                <div id="feedback" className={isSuccess ? 'success' : 'feedback'}>
                    {feedback}
                </div>
                <br />
                <br />
                <p className="register-link">
                    Ainda não possui conta? <a href="/cadastro">Cadastre-se</a>
                </p>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>© 2024 / Desenvolvido por Alexandre, Cristian e Luis</p>
            </footer>
        </>
    );
}

export default Login;
