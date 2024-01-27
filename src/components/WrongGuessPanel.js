import React from 'react';
import '../App.css';

function WrongGuessPanel({answerResult}) {
    var visibleGuesses = [false, false, false];

    if ( !answerResult[0][1] && !visibleGuesses[0] ) {
        visibleGuesses[0] = true;
        return (
            <div className='wrongGuessOne'>
                Your Guess: {answerResult[0][0]} is incorrect! Try again!
            </div>
          );
    }

    if ( !answerResult[1][1] && !visibleGuesses[1] ) {
        visibleGuesses[1] = true;
        return (
            <div className='wrongGuessTwo'>
                Your Guess: {answerResult[1][0]} is incorrect! Try again!
            </div>
          );
    }

    if ( !answerResult[2][1] && !visibleGuesses[2] ) {
        visibleGuesses[2] = true;
        return (
            <div className='wrongGuessThree'>
                Your Guess: {answerResult[2][0]} is incorrect! Try again!
            </div>
          );
    }

}

export default WrongGuessPanel;