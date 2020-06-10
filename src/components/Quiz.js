import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import processString from 'react-process-string';
import { quizQuestions } from '../api/quizApi';
import './Quiz.css';

const Quiz = ({
  answerOptions,
  questionId,
  question,
  questionTotal,
  onAnswerSelected,
  setNextQuestion,
  showAnswer,
  explanation,
}) => {
  const renderAnswerOptions = (key) => (
    <AnswerOption
      key={key.content}
      answerContent={key.content}
      answerType={key.type}
      answerOption={key.option}
      onAnswerSelected={onAnswerSelected}
      showAnswer={showAnswer}
    />
  );

  const addLink = (questionId) => {
    const { links } = quizQuestions[questionId - 1];

    const processStringCfg = [];

    links.forEach((link) => {
      processStringCfg.push({
        regex: new RegExp(link.text),
        fn: (key, result) => (
          <span key={key}>
            <a
              href={link.href}
              target="_blank"
              className="Question-explanationLink"
            >
              {result}
            </a>
          </span>
        ),
      });
    });

    return processString(processStringCfg)(explanation);
  };

  return (
    <div className="Question-root">
      <QuestionCount counter={questionId} total={questionTotal} />
      <Question content={question} />
      <ul className="Answer-list">{answerOptions.map(renderAnswerOptions)}</ul>
      {showAnswer && (
        <React.Fragment>
          <div className="Question-explanation">{addLink(questionId)}</div>
          <button onClick={setNextQuestion} className="Question-btn">
            Продолжить
          </button>
        </React.Fragment>
      )}
    </div>
  );
};

Quiz.propTypes = {
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  showAnswer: PropTypes.bool.isRequired,
};

export default Quiz;
