import React from 'react';
import '../App.css';
import { connect } from 'react-redux';

function WrongComponent({userAnswers}) {

    const renderContainers = () => {
        return userAnswers.map(([answer, _], index) => (
          <div key={index} className={`wrongContainer-${index}`}>
            "{answer}" is incorrect
          </div>
        ));
      };

    return(
        <div className='wrongComponent'>
            {
                renderContainers()
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    userAnswers: state.questions.userAnswers,
  });
  
const mapDispatchToProps = {

};
  
export default connect(mapStateToProps, mapDispatchToProps)(WrongComponent);