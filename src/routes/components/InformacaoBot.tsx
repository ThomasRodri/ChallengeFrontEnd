import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%;
  max-width: 400px;
  margin: 20px auto;
`;

const TextSection = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.span`
  font-size: 1.2em;
  color: #333;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5em;
  color: #333;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 8px;
`;

const Paragraph = styled.p`
  font-size: 1em;
  color: #555;
`;

const Button = styled.a`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: #0056b3;
  }
`;

const InformacaoBot: React.FC = () => {
  return (
    <Container>
      <TextSection>
        <Label>BRASIL</Label>
        <Heading>Conserto automobilístico</Heading>
        <Paragraph>+100 OFICINAS</Paragraph>
      </TextSection>
      <Image src="./img/mulher.png" alt="Mulher" />
      <Image src="./img/robo.png" alt="Robozinho" />
      <Heading>Atendimento via IA</Heading>
      <Paragraph>
        Não deixe passar a oportunidade de ser atendido pelo <strong>Visinho!</strong> Nossa IA focada em lhe guiar durante todo o processo.
      </Paragraph>
      <Button href="#">COMECE JÁ!</Button>
    </Container>
  );
};

export default InformacaoBot;
