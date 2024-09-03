import React from 'react';
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import InformacaoBot from '../components/InformacaoBot';

const App: React.FC = () => {
  return (
    <div>
      <Cabecalho />
      <InformacaoBot />
      <Rodape />
    </div>
  );
};

export default App;
