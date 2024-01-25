import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const LivesComponent = ({ lives }) => {
  return (
    <div className='livesComponent'>
      Lives: {lives}
    </div>
  );
};

const mapStateToProps = (state) => ({
  lives: state.questions.lives,
});

export default connect(mapStateToProps)(LivesComponent);
