import React from 'react';
import { Outlet } from 'react-router-dom'; // Importar o Outlet para renderizar as rotas filhas

const App: React.FC = () => {
  return (
    <div>
      
     
      <Outlet /> {/* Aqui as rotas filhas, como Home, serão renderizadas */}

    </div>
  );
};

export default App;
