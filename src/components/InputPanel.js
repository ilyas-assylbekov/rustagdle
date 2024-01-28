import React, { useState } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { setInputValue } from '../actions/questionAction';

function InputPanel( { onAnswerSubmit, inputValue, setInputValue } ) {

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    onAnswerSubmit();
    /* setInputValue(''); // Clear input after submission */
  };

  return (
    <div className='inputPanel'>
        <div>I think</div>
        <input type='text' value={inputValue} onChange={handleChange} placeholder='Enter your answer here...' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  inputValue: state.questions.inputValue,
});

const mapDispatchToProps = {
  setInputValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputPanel);