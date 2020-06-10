import React, { Component } from 'react';
import { quizQuestions } from './api/quizApi';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Initial from './components/Initial';
import './App.css';

const stateQuiz = {
  INITIAL: 'INITIAL',
  START: 'START',
  FINISH: 'FINISH',
};

const initialState = {
  counter: 0,
  questionId: 1,
  question: '',
  answerOptions: [],
  score: 0,
  showAnswer: false,
  explanation: '',
  stateQuiz: stateQuiz.INITIAL,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.onStartQuiz = this.onStartQuiz.bind(this);
  }

  onStartQuiz() {
    const shuffledAnswerOptions = quizQuestions.map((question) =>
      this.shuffleArray(question.answers)
    );

    this.setState({
      ...initialState,
      stateQuiz: stateQuiz.START,
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0],
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    const { value } = event.target;

    const seletedOption = this.state.answerOptions.find(
      (answer) => answer.option === value
    );

    this.setState({
      answerOptions: [seletedOption],
      showAnswer: true,
      explanation: seletedOption.explanation,
      score:
        seletedOption.type === 'correct'
          ? this.state.score + 1
          : this.state.score,
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    if (counter === quizQuestions.length) {
      this.setState({
        stateQuiz: stateQuiz.FINISH,
      });
    } else {
      this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        showAnswer: false,
        explanation: '',
      });
    }
  }

  renderQuiz() {
    switch (this.state.stateQuiz) {
      case stateQuiz.INITIAL:
        return <Initial onStartQuiz={this.onStartQuiz} />;
      case stateQuiz.START:
        return (
          <Quiz
            answerOptions={this.state.answerOptions}
            questionId={this.state.questionId}
            question={this.state.question}
            questionTotal={quizQuestions.length}
            onAnswerSelected={this.handleAnswerSelected}
            setNextQuestion={this.setNextQuestion}
            showAnswer={this.state.showAnswer}
            explanation={this.state.explanation}
          />
        );
      case stateQuiz.FINISH:
        return (
          <Result
            totalScore={this.state.score}
            onStartQuiz={this.onStartQuiz}
          />
        );
      default:
        return <Initial onStartQuiz={this.onStartQuiz} />;
    }
  }

  render() {
    return <div className="Quiz-root">{this.renderQuiz()}</div>;
  }
}

export default App;
