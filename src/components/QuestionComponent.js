import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setRandomQuestion, decrementLives } from '../actions/questionAction';
import '../App.css';

const QuestionComponent = ({ pool, currentQuestion, setRandomQuestion, decrementLives }) => {
  
  useEffect(() => {
    const getRandomQuestion = () => {
      const randomIndex = Math.floor(Math.random() * pool.length);
      return pool[randomIndex];
    };
  
    const loadInitialQuestion = () => {
      setRandomQuestion(getRandomQuestion());
    };
  
    // Load a random question when the component is mounted
    loadInitialQuestion();
  
  }, [setRandomQuestion, pool]);

  return (
      <div className='questionComponentOuter'>
          {currentQuestion ? (
          <div className='questionComponentInner'>
              {currentQuestion.text}
          </div>
          ) : (
          <p>Loading question...</p>
          )}
      </div>
  );

    // Might be HELPFUL later
    // <button onClick={() => setRandomQuestion(getRandomQuestion())}>Get Random Question</button>
};

const mapStateToProps = (state) => ({
  pool: state.questions.pool,
  currentQuestion: state.questions.currentQuestion,
});

const mapDispatchToProps = {
  setRandomQuestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionComponent);
