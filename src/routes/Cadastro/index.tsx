import React from 'react';
import CadastroC from '../components/CadastroC';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Preenche a tela inteira */
  background-color: #f0f0f0; /* Cor de fundo geral da página */
  margin: 0;
`;

const Cadastro: React.FC = () => {
  return (
    <PageContainer>
      <CadastroC />
    </PageContainer>
  );
};

export default Cadastro;
