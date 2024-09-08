// src/App.tsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Para renderizar as rotas filhas
import Cabecalho from './routes/components/Cabecalho'; // Importar o cabeçalho

const App: React.FC = () => {
  return (
    <div>
      
      <Outlet /> {/* Renderizará o conteúdo das rotas filhas */}
    </div>
  );
};

export default App;
