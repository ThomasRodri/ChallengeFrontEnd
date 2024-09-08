// src/components/LogoLogin.tsx
import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 150px; /* Ajuste para o tamanho fixo, baseado na proporção que parece na imagem */
  height: auto;
  display: block;
  margin: 0 auto; /* Centralizar a imagem */
  padding-bottom: 1rem;
`;

interface LogoProps {
  src: string;
  alt: string;
}

const LogoLogin: React.FC<LogoProps> = ({ src, alt }) => {
  return <LogoImage src={src} alt={alt} />;
};

export default LogoLogin;

