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
        <Image src="https://via.placeholder.com/150" alt="Foto de um integrante" />
        <Paragraph>Parágrafo 1 - Imagem 1</Paragraph>
        <Paragraph>Parágrafo 2 - Imagem 1</Paragraph>
      </ImageWrapper>

      <ImageWrapper>
        <Image src="https://via.placeholder.com/150" alt="Imagem 2" />
        <Paragraph>Parágrafo 1 - Imagem 2</Paragraph>
        <Paragraph>Parágrafo 2 - Imagem 2</Paragraph>
      </ImageWrapper>

      <ImageWrapper>
        <Image src="https://via.placeholder.com/150" alt="Imagem 3" />
        <Paragraph>Parágrafo 1 - Imagem 3</Paragraph>
        <Paragraph>Parágrafo 2 - Imagem 3</Paragraph>
      </ImageWrapper>
    </Container>
  );
};

export default Integrantes;
