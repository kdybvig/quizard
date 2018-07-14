import React from 'react';
import { connect } from 'react-redux';
import { changeActiveQuestion } from '../actions';

const QuestionButton = (props) => {
  const question = props.categories[props.catIndex].questions[props.questIndex];
  return (
    <p className={props.className} onClick={()=>props.dispatch(changeActiveQuestion(question))}>
    {props.value}
    </p>
  )
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(QuestionButton);
