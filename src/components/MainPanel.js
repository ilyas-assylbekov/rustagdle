import React from 'react';
import '../App.css';
import Header from './Header';
import QuestionPanel from './QuestionPanel';

function MainPanel() {
  return (
    <div className='mainPanel'>
        <Header />
        <QuestionPanel />
    </div>
  );
}

export default MainPanel;