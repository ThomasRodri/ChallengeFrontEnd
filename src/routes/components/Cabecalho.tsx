// src/routes/components/Cabecalho.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Usar o Link do React Router Dom

const Cabecalho: React.FC = () => {
  return (
    <header id="cabecalho">
      <div className="itens">
        <a className="linkporto" href="https://www.portoseguro.com.br" target="_blank" rel="noopener noreferrer">
          <img className="porto" src="./img/porto.png" alt="logo da porto" />
        </a>
        <nav>
          <ul>
            <li className="login">
              <Link to="/login" id="login-button">Login</Link> {/* Usando o Link para a rota de login */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Cabecalho;
