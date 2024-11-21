import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate(); // Hook para navegação entre rotas

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar usuário, ex: armazenando em uma variável no estado, ou enviando para um backend.
    console.log('Usuário registrado:', usuario);
    navigate('/login'); // Redireciona para a tela de login após registro bem-sucedido
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
        Registrar
      </Button>
    </Form>
  );
};

export default RegisterPage;
