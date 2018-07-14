import React from 'react';
import { connect } from 'react-redux';
import '../CSS/Game.css';
import BoardContainer from '../containers/BoardContainer';
import CategoryForm from '../containers/CategoryForm';
import QuestionForm from '../containers/QuestionForm'
import QuestionDisplay from './QuestionDisplay';



const Game = (props) => {

  const renderActiveComponent = () => {
    if (!props.allSubmitted) {
      return props.categoriesSubmitted ? <QuestionForm /> : <CategoryForm />
    }
    else {
      return props.activeQuestion ? <QuestionDisplay /> : <BoardContainer />
    }
  }

  return (
    <div className="Game">
      {renderActiveComponent()}
    </div>
  );
}

const mapStateToProps = state => ({
  allSubmitted: state.questionsSubmitted,
  categoriesSubmitted: state.categoriesSubmitted,
  activeQuestion: state.activeQuestion
})

export default connect(mapStateToProps)(Game);
