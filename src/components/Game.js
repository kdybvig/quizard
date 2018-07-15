import React from 'react';
import { connect } from 'react-redux';
import '../CSS/Game.css';
import BoardContainer from '../containers/BoardContainer';
import CategoryForm from '../containers/CategoryForm';
import QuestionForm from '../containers/QuestionForm'
import QuestionDisplay from './QuestionDisplay';
import TeamForm from '../containers/TeamForm';
import TeamDisplay from './TeamDisplay';



const Game = (props) => {

  const renderActiveComponent = () => {
    if (!props.allSubmitted) {
      if (!props.questionsSubmitted) {
        return props.categoriesSubmitted ? <QuestionForm /> : <CategoryForm />
      }
      else return <TeamForm />
    }
    else {
      return props.activeQuestion ? <QuestionDisplay /> : <BoardContainer />
    }
  }

  return (
    <div className="game">
      {props.allSubmitted && <TeamDisplay teams={props.teams}/>}
      {renderActiveComponent()}
    </div>
  );
}

const mapStateToProps = state => ({
  allSubmitted: state.teamsSubmitted,
  categoriesSubmitted: state.categoriesSubmitted,
  questionsSubmitted: state.questionsSubmitted,
  activeQuestion: state.activeQuestion,
  teams: state.teams
})

export default connect(mapStateToProps)(Game);
