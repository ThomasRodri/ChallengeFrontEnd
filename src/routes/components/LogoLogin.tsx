// src/components/LogoLogin.tsx
import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 50%; /* Ajuste para largura relativa */
  height: auto;
  margin-bottom: 1rem;
`;

interface LogoProps {
  src: string;
  alt: string;
}

const LogoLogin: React.FC<LogoProps> = ({ src, alt }) => {
  return <LogoImage src={src} alt={alt} />;
};

export default LogoLogin;
