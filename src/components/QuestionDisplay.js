import React from 'react';
import { connect } from 'react-redux';
import { changeActiveQuestion } from '../actions';

const QuestionDisplay = ({activeQuestion, dispatch}) => {
  return (
    <div>
      <h1>
      {activeQuestion}
      </h1>
      <button onClick={()=> dispatch(changeActiveQuestion(false))}>Back</button>
    </div>
  )
}

const mapStateToProps = state => ({
  activeQuestion: state.categories[state.activeQuestion[0]].questions[state.activeQuestion[1]].name
});

export default connect(mapStateToProps)(QuestionDisplay);
