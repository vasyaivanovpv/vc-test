import React from 'react';
import PropTypes from 'prop-types';
import './Initial.css';

const Inital = ({ onStartQuiz }) => (
  <div className="Initial-root">
    <div>
      <header className="Initial-header">
        <span className="Initial-headerText">Тест</span>
      </header>
      <h2 className="Initial-caption">
        Как хорошо вы разбираетесь в новостях бизнеса
      </h2>
      <p className="Initial-description">По следам публикаций на vc.ru.</p>
    </div>
    <button onClick={onStartQuiz} className="Initial-btn">
      Начать
    </button>
  </div>
);

Inital.propTypes = {
  onStartQuiz: PropTypes.func.isRequired,
};

export default Inital;
