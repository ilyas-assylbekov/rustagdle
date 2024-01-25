import React, { useState } from 'react';
import '../App.css';

function InputPanel( { onInputChange, onAnswerSubmit } ) {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    onInputChange(value);
  };

  const handleSubmit = () => {
    onAnswerSubmit();
    setInputValue(''); // Clear input after submission
  };

  return (
    <div className='inputPanel'>
        <div>I think</div>
        <input type='text' value={inputValue} onChange={handleChange} placeholder='Enter your answer here...' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default InputPanel;