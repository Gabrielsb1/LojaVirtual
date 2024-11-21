import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === 'admin' && senha === '12345') {
      onLogin(true);
      navigate('/'); // Redireciona para a Home após login bem-sucedido
    } else {
      setErro('Usuário ou senha incorretos!');
    }
  };

  return (
    <div className="login-container">
      {/* Seção à esquerda com a logo e nome da loja */}
      <div className="left-section">
        <img src="/logo.png" alt="Logo da Loja Virtual" />
        <h1>Loja Virtual</h1>
      </div>

      {/* Seção à direita com o formulário de login */}
      <div className="right-section">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>

        {/* Botão de login com Google */}
        <button className="google-btn" onClick={() => alert('Login com Google (não funcional)')}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo" />
          Entrar com o Google
        </button>

        {/* Mensagem de erro caso as credenciais estejam incorretas */}
        {erro && <p className="error">{erro}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
