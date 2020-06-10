import React from 'react';
import PropTypes from 'prop-types';
import './QuestionCount.css';

const QuestionCount = ({ counter, total }) => (
  <div className="QuestionCount-root">
    <span className="QuestionCount-current">{counter}</span>/
    <span className="QuestionCount-total">{total}</span>
  </div>
);

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
