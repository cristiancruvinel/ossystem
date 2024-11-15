import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/login.css';

function Login() {
    const [feedback, setFeedback] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate(); // Definindo a navegação

    const login = async () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: username, senha: password }),
            });

            if (response.ok) {
                const data = await response.json();
                setFeedback(data.message);
                setIsSuccess(true);
                setTimeout(() => {
                    navigate('/home');
            }, 500);
        } else {
            const errorData = await response.json();
            setFeedback(errorData.message || 'Erro no login');
            setIsSuccess(false);
        }
    } catch (error) {
        setFeedback('Erro de conexão com o servidor');
        setIsSuccess(false);
    }
    };

    const handleCadastroClick = () => {
        navigate('/cadastro'); 
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            login();
        }
    };

    return (
        <>
            <header className="header">
                <h1>Logo:</h1>
            </header>

            <div className="login-container">
                <h2>Login</h2>
                <label htmlFor="username">Email:</label>
                <input type="text" id="username" placeholder="Usuário" required onKeyDown={handleKeyPress}/>
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" placeholder="Senha" required onKeyDown={handleKeyPress}/>
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
