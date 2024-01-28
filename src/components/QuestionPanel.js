import React from 'react';
import '../App.css';
import QuestionComponent from './QuestionComponent';
import LivesComponent from './LivesComponent';

function QuestionPanel() {
  return (
    <div className='questionPanel'>
        <QuestionComponent />
        <LivesComponent />
    </div>
  );
}

export default QuestionPanel;