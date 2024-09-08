// src/components/LoginForm.tsx
import React from 'react';
import styled from 'styled-components';
import LogoLogin from './LogoLogin'; // Importa o componente de logo

const FormContainer = styled.div`
  background: linear-gradient(to bottom, #0082c8, #00578a);
  padding: 2rem;
  border-radius: 1rem;
  width: 80vw;
  max-width: 30rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
  width: 90%;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: 0.5rem;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  display: block;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  color: white;
  background-color: #00578a;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
  width: 90%;
  font-size: 1rem;

  &:hover {
    background-color: #004a70;
  }
`;

const LoginForm: React.FC = () => {
  return (
    <FormContainer>
      {/* Adicionando o Logo dentro do formulário */}
      <LogoLogin src="porto.png" alt="Logo Porto" /> 
      
      <Title>Iniciar sessão</Title>
      <InputGroup>
        <Input type="text" placeholder="Email ou CPF" />
      </InputGroup>
      <InputGroup>
        <Input type="password" placeholder="Senha" />
      </InputGroup>
      <Link href="#">Esqueci minha senha</Link>
      <Link href="/Cadastro">Não tem cadastro? Crie um!</Link>
      <Button type="submit">Entrar</Button>
      <Button onClick={() => window.location.href = '/'}>
        Voltar à página principal
      </Button>
    </FormContainer>
  );
};

export default LoginForm;
