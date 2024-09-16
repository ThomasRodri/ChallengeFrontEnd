import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const Paragraph = styled.p`
  margin: 10px 0;
`;

const Integrantes: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src="thomas.jpg" alt="Foto de Thomas" />
        <Paragraph>Nome: Thomas Rodrigues</Paragraph>
        <Paragraph>RM: 558042</Paragraph>
      </ImageWrapper>

      <ImageWrapper>
        <Image src="miguel.jpg" alt="foto de Miguel" />
        <Paragraph>Nome: Miguel Barros Ramos</Paragraph>
        <Paragraph>RM: 556652</Paragraph>
      </ImageWrapper>

      <ImageWrapper>
        <Image src="pedro.jpg" alt="foto e Pedro " />
        <Paragraph>Parágrafo 1 - Imagem 3</Paragraph>
        <Paragraph>Parágrafo 2 - Imagem 3</Paragraph>
      </ImageWrapper>
    </Container>
  );
};

export default Integrantes;
