import React from 'react';
import { connect } from 'react-redux';
import { changeActiveQuestion } from '../actions';

const QuestionDisplay = ({activeQuestion, dispatch}) => {
  return (
    <div>
      <h1>
      {activeQuestion}
      </h1>
      <button onClick={()=> dispatch(changeActiveQuestion(''))}>Back</button>
    </div>
  )
}

const mapStateToProps = state => ({
  activeQuestion: state.activeQuestion
});

export default connect(mapStateToProps)(QuestionDisplay);
