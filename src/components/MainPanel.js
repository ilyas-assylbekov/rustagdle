import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Header from './Header';
import QuestionPanel from './QuestionPanel';
import InputPanel from './InputPanel';
import { decrementLives, resetLives } from '../actions/questionAction';
import WrongGuessPanel from './WrongGuessPanel';

function MainPanel({currentQuestion, decrementLives, lives, resetLives  }) {
  const [userAnswer, setUserAnswer] = useState('');
  const [answerResult, setAnswerResult] = useState([]);

  const handleInputChange = (value) => {
    setUserAnswer(value);
  };

  const handleAnswerSubmit = () => {
    // Logic to compare userAnswer with correct answer
    // Update answerResult accordingly
    // Decrement lives if the answer is wrong

    if (currentQuestion.correctAnswer.toLowerCase() === userAnswer.trim().toLowerCase()) {
      const value = true;
      setAnswerResult([userAnswer, value]);
      //resetLives();
    } else {
      const value = false;
      setAnswerResult([userAnswer, value]);
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
        {answerResult.length !== 0 ? (<WrongGuessPanel answerResult={answerResult} />) : (null) }
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