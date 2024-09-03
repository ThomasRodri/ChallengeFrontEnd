import React from 'react';

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
              <a href="./login.html" id="login-button">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Cabecalho;