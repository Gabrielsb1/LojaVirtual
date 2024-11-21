// src/pages/Produtos.js
import React, { useState } from 'react';
import Produto from '../components/Produto';
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [produtos] = useState([
    { id: 1, nome: "Produto 1", descricao: "Descrição 1", preco: 100, imagem: 'https://via.placeholder.com/150' },
    { id: 2, nome: "Produto 2", descricao: "Descrição 2", preco: 200, imagem: 'https://via.placeholder.com/150' }
  ]);

  return (
    <div>
      <h2>Produtos</h2>
      <div className="products-list">
        {produtos.map(produto => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </div>
      <Link to="/cart">Ir para Carrinho</Link>
    </div>
  );
};

export default Produtos;
