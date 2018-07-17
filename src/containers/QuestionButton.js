import React from 'react';
import { connect } from 'react-redux';
import { changeActiveQuestion } from '../actions';
import { withRouter } from 'react-router-dom';

const QuestionButton = (props) => {
  const questionObj = props.categories.length && props.categories[props.catIndex].questions[props.questIndex];
  const isAnswered = questionObj.answered;
  const className = isAnswered ? 'points answered' : 'points';
  const location = [props.catIndex, props.questIndex];

  const showQuestion = () => {
    if(isAnswered) return;
    console.log(location);
    props.dispatch(changeActiveQuestion(location))
    props.history.push('/game/question')
  }

  return (
    <p className={className} onClick={showQuestion}>
        {props.value}
    </p>
  )
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default withRouter(connect(mapStateToProps)(QuestionButton));
