import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CarrinhoPage from './pages/CarrinhoPage';
import LoginPage from './pages/LoginPage';
import { Navbar, Nav, Container } from 'react-bootstrap';

const App = () => {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState(false);

  const location = useLocation(); // Hook para obter a rota atual

  const adicionarAoCarrinho = (produto) => {
    setItensCarrinho([...itensCarrinho, produto]);
  };

  const removerDoCarrinho = (id) => {
    setItensCarrinho(itensCarrinho.filter(item => item.id !== id));
  };

  // Verifica se a página atual é a de login
  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      {/* Exibe a navbar somente se não estiver na página de login */}
      {!isLoginPage && (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/"></Navbar.Brand>
            <Nav>
              <Nav.Link as={Link} to="/"></Nav.Link>
              <Nav.Link as={Link} to="/cart"></Nav.Link>
              <Nav.Link as={Link} to="/login"></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      )}

      <Routes>
        <Route
          path="/"
          element={<Home onAdicionarAoCarrinho={adicionarAoCarrinho} />}
        />
        <Route path="/cart" element={<CarrinhoPage itens={itensCarrinho} onRemoverDoCarrinho={removerDoCarrinho} />} />
        <Route path="/login" element={<LoginPage onLogin={setUsuarioLogado} />} />
      </Routes>
    </div>
  );
};

export default App;
