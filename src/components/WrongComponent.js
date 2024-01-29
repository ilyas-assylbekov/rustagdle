import React from 'react';
import '../App.css';
import { connect } from 'react-redux';

function WrongComponent({userAnswers}) {
    return(
        <div className='wrongComponent'>
            
        </div>
    );
}

const mapStateToProps = (state) => ({
    userAnswers: state.questions.userAnswers,
  });
  
const mapDispatchToProps = {

};
  
export default connect(mapStateToProps, mapDispatchToProps)(WrongComponent);