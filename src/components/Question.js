import React from 'react';
import PropTypes from 'prop-types';
import './Question.css';

const Question = ({ content }) => <h2 className="Question-text">{content}</h2>;

Question.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Question;
