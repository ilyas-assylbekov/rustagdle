import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Header from './Header';
import QuestionPanel from './QuestionPanel';
import InputPanel from './InputPanel';
import { decrementLives, resetLives } from '../actions/questionAction';

function MainPanel({currentQuestion, decrementLives, lives, resetLives  }) {
  const [userAnswer, setUserAnswer] = useState('');
  const [answerResult, setAnswerResult] = useState('');

  const handleInputChange = (value) => {
    setUserAnswer(value);
  };

  const handleAnswerSubmit = () => {
    // Logic to compare userAnswer with correct answer
    // Update answerResult accordingly
    // Decrement lives if the answer is wrong

    if (currentQuestion.correctAnswer.toLowerCase() === userAnswer.trim().toLowerCase()) {
      setAnswerResult(true);
      //resetLives();
    } else {
      setAnswerResult(false);
      // Decrement lives or handle incorrect answer logic here
      decrementLives();
      if ( lives === 0 ) {
        resetLives();
      }
    }

  };

  return (
    <div className='mainPanel'>
        <Header />
        <QuestionPanel answerResult={answerResult} />
        <InputPanel onInputChange={handleInputChange} onAnswerSubmit={handleAnswerSubmit} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentQuestion: state.questions.currentQuestion,
  lives: state.questions.lives,
});

const mapDispatchToProps = {
  decrementLives,
  resetLives,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);