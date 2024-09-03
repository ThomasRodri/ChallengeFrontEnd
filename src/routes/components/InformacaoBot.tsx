import React from 'react';

const InformacaoBot: React.FC = () => {
  return (
    <div className="container">
      <div className="text-section">
        <span className="label-brasil">BRASIL</span>
        <h2>Conserto automobilístico</h2>
        <p>+100 OFICINAS</p>
      </div>
      <div className="main-content">
        <div className="ai-section">
          <div className="robot-section">
            <img className="woman" src="./img/mulher.png" alt="Mulher" />
            <img className="robot" src="./img/robo.png" alt="Robozinho" />
          </div>
        </div>
        <div className="car-section">
          <div className="car-image">
            <img className="gosma" src="./img/vector.png" alt="gosma" />
            <img className="onix" src="./img/branco-summit-novo-onix.png" alt="carro" />
          </div>
        </div>
      </div>
      <div className="text-ai">
        <h2>Atendimento via IA</h2>
        <p>Não deixe passar a oportunidade de ser atendido pelo <strong>Visinho!</strong> Nossa IA focada em lhe guiar durante todo o processo de seu atendimento, proporcionando, efetividade, dinamismo e rapidez no fluxo de diálogo.</p>
        <a href="#" className="button">COMECE JÁ!</a>
      </div>
    </div>
  );
};

export default InformacaoBot;
