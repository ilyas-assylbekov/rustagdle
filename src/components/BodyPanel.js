import React from 'react';
import '../App.css';
import MainPanel from './MainPanel';
import RightPanel from './RightPanel';
import LeftPanel from './LeftPanel';

function BodyPanel() {
  return (
    <div className='bodyPanel'>
        <LeftPanel />
        <MainPanel />
        <RightPanel />
    </div>
  );
}

export default BodyPanel;