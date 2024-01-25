import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Header from './Header';
import QuestionPanel from './QuestionPanel';
import InputPanel from './InputPanel';

function MainPanel({pool}) {
  const [userAnswer, setUserAnswer] = useState('');
  const [answerResult, setAnswerResult] = useState('');

  const handleInputChange = (value) => {
    setUserAnswer(value);
  };

  const handleAnswerSubmit = () => {
    // Logic to compare userAnswer with correct answer
    // Update answerResult accordingly
    // Decrement lives if the answer is wrong

    // TODO: fix parts with currentQuestion here
    const currentQuestion = pool[0]; // Assuming you're only using the first question for demonstration

    if (currentQuestion.correctAnswer.toLowerCase() === userAnswer.trim().toLowerCase()) {
      setAnswerResult('Correct!');
    } else {
      setAnswerResult('Wrong!');
      // Decrement lives or handle incorrect answer logic here
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
  pool: state.questions.pool,
});

export default connect(mapStateToProps)(MainPanel);