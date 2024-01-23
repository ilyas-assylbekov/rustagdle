import React from 'react';
import '../App.css';

function Header() {
  return (
    <div className='headerOuterContainer'>
      <div className='headerInnerContainer'>
        <img src={ require("../assets/images/logo.jpg") } />
        <div>
            RUSTAGDLE
        </div>
      </div>
    </div>
  );
}

export default Header;