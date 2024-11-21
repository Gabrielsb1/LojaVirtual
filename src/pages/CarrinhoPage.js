import React from 'react';
import './CarrinhoPage.css';

const CarrinhoPage = ({ itens, onRemoverDoCarrinho }) => {
  const total = itens.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div className="container">
      <h1>Carrinho de Compras</h1>
      <ul>
        {itens.map(item => (
          <li key={item.id}>
            <span>{item.nome}</span>
            <span>R${item.preco}</span>
            <button onClick={() => onRemoverDoCarrinho(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <div className="total">
        <p>Total: R${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CarrinhoPage;
