import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Header from './Header';
import QuestionPanel from './QuestionPanel';
import InputPanel from './InputPanel';
import { decrementLives, resetLives, addToArray, resetArray, setCorrectAnswer } from '../actions/questionAction';

function MainPanel({currentQuestion, decrementLives, lives, resetLives, inputValue, addToArray, resetArray, setCorrectAnswer }) {

  const handleAnswerSubmit = () => {
    // Logic to compare inputValue with correct answer
    // Update answerResult accordingly
    // Decrement lives if the answer is wrong

    if (currentQuestion.correctAnswer.toLowerCase() === inputValue.trim().toLowerCase()) {
      // Logic if the inputValue is correct

      setCorrectAnswer(true);

      const answer = [ inputValue, true ];
      addToArray( answer );

      //resetLives();
    } else {
      // Logic if the inputValue is incorrect

      setCorrectAnswer(false);

      const answer = [ inputValue, false ];
      addToArray( answer );

      // Decrement lives or handle incorrect answer logic here
      decrementLives();
      if ( lives === 0 ) {
        resetLives();
        resetArray();
      }
    }

  };

  return (
    <div className='mainPanel'>
        <Header />
        <QuestionPanel />
        <InputPanel onAnswerSubmit={handleAnswerSubmit} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentQuestion: state.questions.currentQuestion,
  lives: state.questions.lives,
  inputValue: state.questions.inputValue,
  userAnswers: state.questions.userAnswers,
});

const mapDispatchToProps = {
  decrementLives,
  resetLives,
  addToArray,
  resetArray,
  setCorrectAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);