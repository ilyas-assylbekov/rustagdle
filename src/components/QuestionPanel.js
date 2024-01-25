import React from 'react';
import '../App.css';
import QuestionComponent from './QuestionComponent';
import LivesComponent from './LivesComponent';

function QuestionPanel({answerResult}) {
  return (
    <div className='questionPanel'>
        <QuestionComponent answerResult={answerResult} />
        <LivesComponent />
    </div>
  );
}

export default QuestionPanel;