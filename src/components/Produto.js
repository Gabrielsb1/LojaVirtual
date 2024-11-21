// src/components/Produto.js

import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Produto = ({ produto, onAdicionarAoCarrinho }) => {
  return (
    <Card>
      <Card.Img variant="top" src={produto.imagem} />
      <Card.Body>
        <Card.Title>{produto.nome}</Card.Title>
        <Card.Text>{produto.descricao}</Card.Text>
        <Card.Text>R$ {produto.preco}</Card.Text>
        <Button variant="primary" onClick={() => onAdicionarAoCarrinho(produto)}>
          Adicionar ao Carrinho
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Produto;

