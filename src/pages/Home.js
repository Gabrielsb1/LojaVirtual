import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Novo estado para exibir detalhes do produto

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % 3); // Supondo que temos 3 imagens no carrossel
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product); // Ao clicar em "Ver Mais", mostra as informações do produto
  };

  const products = [
    { 
      id: 1, 
      name: 'Produto 1', 
      price: 'R$ 99,99', 
      image: 'https://via.placeholder.com/200',
      description: 'Descrição detalhada do Produto 1.',
      feedback: 'Feedback: Muito bom!'
    },
    { 
      id: 2, 
      name: 'Produto 2', 
      price: 'R$ 149,99', 
      image: 'https://via.placeholder.com/200',
      description: 'Descrição detalhada do Produto 2.',
      feedback: 'Feedback: Excelente qualidade!'
    },
    { 
      id: 3, 
      name: 'Produto 3', 
      price: 'R$ 79,99', 
      image: 'https://via.placeholder.com/200',
      description: 'Descrição detalhada do Produto 3.',
      feedback: 'Feedback: Vale a pena!'
    },
  ];

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <a href="/" className="logo">Loja Virtual</a>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/cart">Carrinho ({cart.length})</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
      </nav>

      {/* Carrossel */}
      <div className="carousel-container">
        <div className="carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          <img src="https://via.placeholder.com/1200x350" alt="Promoção 1" />
          <img src="https://via.placeholder.com/1200x350" alt="Promoção 2" />
          <img src="https://via.placeholder.com/1200x350" alt="Promoção 3" />
        </div>
        <div className="carousel-nav">
          <button className="carousel-button" onClick={handlePrev}>❮</button>
          <button className="carousel-button" onClick={handleNext}>❯</button>
        </div>
      </div>

      {/* Produtos em Destaque */}
      <div className="products-section">
        <h2>Produtos em Destaque</h2>
        <div className="products-cards">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-details">
                <div className="product-name">{product.name}</div>
                <div className="product-price">{product.price}</div>
                <button onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</button>
                <button className="view-more-button" onClick={() => handleViewDetails(product)}>
                  Ver Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detalhes do Produto (quando clicado) */}
      {selectedProduct && (
        <div className="product-details-popup">
          <div className="popup-content">
            <h3>{selectedProduct.name}</h3>
            <p><strong>Preço:</strong> {selectedProduct.price}</p>
            <p><strong>Descrição:</strong> {selectedProduct.description}</p>
            <p><strong>Feedback:</strong> {selectedProduct.feedback}</p>
            <button onClick={() => setSelectedProduct(null)}>Fechar</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Loja Virtual</p>
        <div className="social-icons">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </footer>
    </div>
  );
};

export default Home;
