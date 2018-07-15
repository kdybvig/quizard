import React from 'react';
import { connect } from 'react-redux';
import { changeActiveQuestion } from '../actions';

const QuestionButton = (props) => {
  const questionObj = props.categories[props.catIndex].questions[props.questIndex];
  const isAnswered = questionObj.answered;
  const className = isAnswered ? 'points answered' : 'points';
  const location = [props.catIndex, props.questIndex];

  const showQuestion = () => {
    if(isAnswered) return;
    props.dispatch(changeActiveQuestion(location))
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

export default connect(mapStateToProps)(QuestionButton);
