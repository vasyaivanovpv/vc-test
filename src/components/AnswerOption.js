import React from 'react';
import PropTypes from 'prop-types';
import './AnswerOption.css';

const AnswerOption = ({
  showAnswer,
  answerType,
  onAnswerSelected,
  answerContent,
  answerOption,
}) => (
  <li className="Answer-option">
    <input
      type="radio"
      className="Answer-input"
      name="radioGroup"
      id={answerOption}
      value={answerOption}
      onChange={onAnswerSelected}
      hidden={true}
    />
    <label
      className={`Answer-label ${
        showAnswer
          ? answerType === 'correct'
            ? 'Answer-correct'
            : 'Answer-wrong'
          : ''
      }`}
      htmlFor={answerOption}
    >
      {answerContent}
    </label>
  </li>
);

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  answerOption: PropTypes.string.isRequired,
  showAnswer: PropTypes.bool.isRequired,
};

export default AnswerOption;
