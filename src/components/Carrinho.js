// src/components/Carrinho.js

import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const Carrinho = ({ itens, onRemoverDoCarrinho }) => {
  const calcularTotal = () => {
    return itens.reduce((total, item) => total + item.preco, 0);
  };

  return (
    <div>
      <h4>Carrinho de Compras</h4>
      <ListGroup>
        {itens.map(item => (
          <ListGroup.Item key={item.id}>
            <div className="d-flex justify-content-between">
              <span>{item.nome}</span>
              <span>R$ {item.preco}</span>
              <Button variant="danger" onClick={() => onRemoverDoCarrinho(item.id)}>
                Remover
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h5>Total: R$ {calcularTotal()}</h5>
    </div>
  );
};

export default Carrinho;
