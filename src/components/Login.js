import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate(); // Hook para navegação entre rotas

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === 'admin' && senha === '12345') {
      onLogin(true); // Faz a autenticação do usuário
      navigate('/'); // Redireciona para a Home após login bem-sucedido
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };

  const handleCreateAccount = () => {
    navigate('/register'); // Redireciona para a tela de registro
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Usuário</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite seu usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Entrar
      </Button>
      <Row className="mt-3">
        <Col>
          <Button variant="secondary" onClick={handleCreateAccount}>
            Criar conta
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Login;
