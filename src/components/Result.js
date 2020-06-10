import React from 'react';
import PropTypes from 'prop-types';
import { quizQuestions, quizResult } from '../api/quizApi';
import './Result.css';
import {
  FacebookShareButton,
  TwitterShareButton,
  VKShareButton,
} from 'react-share';
import { FacebookIcon, TwitterIcon, VKIcon } from 'react-share';

const reverseQuizResult = quizResult.reverse();

const Result = ({ totalScore, onStartQuiz }) => {
  const { content, score } = reverseQuizResult.find(
    (result) => totalScore >= result.score
  );

  return (
    <div className={`Result-root Result-rootBg${score}`}>
      <div className="Result-container">
        <div className="Result-content">
          <div className="Result-header">
            <span>{totalScore}</span> из <span>{quizQuestions.length}</span>{' '}
            правильных ответов
          </div>
          <div className="Result-title">{content}</div>
          <div className="Social-root">
            <FacebookShareButton
              url="https://vc.ru"
              className="Social-btn Social-wideBtn"
            >
              <span className="Social-btnContent">
                <FacebookIcon
                  size={50}
                  bgStyle={{ fill: 'white' }}
                  iconFillColor="#45668e"
                />
                <span className="Social-wideBtnText">Поделиться</span>
              </span>
            </FacebookShareButton>
            <TwitterShareButton url="https://vc.ru" className="Social-btn">
              <span className="Social-btnContent">
                <TwitterIcon
                  size={50}
                  bgStyle={{ fill: 'white' }}
                  iconFillColor="#00aced"
                />
              </span>
            </TwitterShareButton>
            <VKShareButton url="https://vc.ru" className="Social-btn">
              <span className="Social-btnContent">
                <VKIcon
                  size={50}
                  bgStyle={{ fill: 'white' }}
                  iconFillColor="#45668e"
                />
              </span>
            </VKShareButton>
          </div>
        </div>
        <button onClick={onStartQuiz} className="Result-btn">
          Пройти еще раз
        </button>
      </div>
    </div>
  );
};

Result.propTypes = {
  score: PropTypes.number.isRequired,
  onStartQuiz: PropTypes.func.isRequired,
};

export default Result;
