import React, { useState } from 'react';
import '../App.css';
import WrongComponent from './WrongComponent';

function RightPanel() {
    return(
        <div className='rightPanel'>
            <WrongComponent />
        </div>
    );
}

export default RightPanel;