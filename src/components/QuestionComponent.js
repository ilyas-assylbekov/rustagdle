import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setRandomQuestion, setCorrectAnswer, setCurrentIndex, getRandQuest, resetArray } from '../actions/questionAction';
import '../App.css';

const QuestionComponent = ({ pool, currentQuestion, setRandomQuestion, correctAnswer, lives, userAnswers, currentIndex, setCurrentIndex, getRandQuest, resetArray }) => {
  
  useEffect(() => {
    /* const getRandomQuestion = () => {
      const randomIndex = Math.floor(Math.random() * pool.length);
      setCurrentIndex( randomIndex );
      return pool[randomIndex];
    }; */
  
    const loadInitialQuestion = () => {
      /* setRandomQuestion(getRandomQuestion()); */
      getRandQuest();
    };
  
    // Load a random question when the component is mounted
    loadInitialQuestion();
  
  }, [setRandomQuestion, pool, setCurrentIndex, getRandQuest]);

  const congratulate = () => {
    const i = (userAnswers.length) - 1;
    return <div className='questionComponentInner'>Congratulations! Your answer: "{ i >= 0 ? userAnswers[i][0] : <div>Loading...</div> }" was correct!
              <button onClick={() => {getRandQuest(); resetArray()}} className='nextQuestionButton'>Get Next Question</button></div>;
  };

  const showCorrectAnswer = () => {
    return <div className='questionComponentInner'>Better luck next time! Correct answer was: "{ pool[currentIndex].correctAnswer }"
              <button onClick={() => {getRandQuest(); resetArray()}} className='nextQuestionButton'>Get Next Question</button></div>;
  };

  const showQuestion = () => {
    if (currentQuestion) {
      return <div className='questionComponentInner'>{currentQuestion.text}</div>;
    }
    return <p>Loading question...</p>;
  };

  const combineComponents = () => {
    if (correctAnswer && lives > 0) {
      setCorrectAnswer(false);
      return congratulate();
    } else if ( lives === 0 ) {
      return showCorrectAnswer();
    } else {
      return showQuestion();
    }
  };

  return (
      <div className='questionComponentOuter'>
          {/* {currentQuestion ? (
          <div className='questionComponentInner'>
              {currentQuestion.text}
          </div>
          ) : (
          <p>Loading question...</p>
          )} */}
          { combineComponents() }
      </div>
  );

    // Might be HELPFUL later
    // <button onClick={() => setRandomQuestion(getRandomQuestion())}>Get Random Question</button>
};

const mapStateToProps = (state) => ({
  pool: state.questions.pool,
  currentQuestion: state.questions.currentQuestion,
  correctAnswer: state.questions.correctAnswer,
  lives: state.questions.lives,
  userAnswers: state.questions.userAnswers,
  currentIndex: state.questions.currentIndex,
});

const mapDispatchToProps = {
  setRandomQuestion,
  setCorrectAnswer,
  setCurrentIndex,
  getRandQuest,
  resetArray,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionComponent);
