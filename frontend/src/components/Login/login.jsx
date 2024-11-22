import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/login.css';

function Login() {
    const [feedback, setFeedback] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate(); // Definindo a navegação

    const login = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === '1234') {
            setFeedback('Login bem-sucedido!');
            setIsSuccess(true);

            setTimeout(() => {
                navigate('/home');
            }, 1000);
        } else {
            setFeedback('Usuário ou senha incorretos');
            setIsSuccess(false);
        }
    };

    const handleCadastroClick = () => {
        navigate('/cadastro'); 
    };

    return (
        <>
            <header className="header">
                <h1>Logo:</h1>
            </header>

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
                <p className="register-link">
                    Ainda não possui conta?{' '}
                    <button onClick={handleCadastroClick}>Cadastre-se</button>
                </p>
            </div>

            <footer className="footer">
                <p>© 2024 / Desenvolvido por Alexandre, Cristian e Luis</p>
            </footer>
        </>
    );
}

export default Login;
