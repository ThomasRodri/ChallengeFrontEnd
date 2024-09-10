import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 20px;
  background-color: #333;
  text-align: center;
  color: white;
`;

const Logo = styled.img`
  width: 150px;
`;

const Rodape: React.FC = () => {
  return (
    <Footer>
      <Logo src="./img/imagem.white porto.png" alt="logo branco da porto" />
    </Footer>
  );
};

export default Rodape;
