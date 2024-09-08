// src/pages/LoginPage.tsx
import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

const LoginContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
`;

const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <div>
        
        <LoginForm />
      </div>
    </LoginContainer>
  );
};

export default LoginPage;