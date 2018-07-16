import React from 'react';
import { connect } from 'react-redux';
import { changeActiveQuestion } from '../actions';
import TeamSelect from './TeamSelect';
import { awardPoints } from '../actions';

const QuestionDisplay = ({activeQuestion, teams, points, dispatch}) => {
  const dispatchAwardPoints = (points, team) => {
    dispatch(awardPoints(points, team));
  }

  return (
    <div id='questionDisplay'>
      <h1>
      {activeQuestion}
      </h1>
      <TeamSelect activeQuestion={activeQuestion} teams={teams} points={points} awardPoints={dispatchAwardPoints}/>
    </div>
  )
}

const mapStateToProps = state => ({
  activeQuestion: state.categories[state.activeQuestion[0]].questions[state.activeQuestion[1]].name,
  points: state.categories[state.activeQuestion[0]].questions[state.activeQuestion[1]].value,
  teams: state.teams.map(team => team.name)
});

export default connect(mapStateToProps)(QuestionDisplay);
