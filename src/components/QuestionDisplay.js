import React from 'react';
import { connect } from 'react-redux';
import TeamSelect from './TeamSelect';
import { awardPoints } from '../actions';
import { withRouter } from 'react-router-dom';

const QuestionDisplay = ({activeQ, teams, points, dispatch, history}) => {
  if(!teams) {
    history.push(process.env.PUBLIC_URL + '/')
    return<div></div>
  }

  const dispatchAwardPoints = (points, team) => {
    dispatch(awardPoints(points, team));
    history.push(process.env.PUBLIC_URL + '/game/board')
  }

  return (
    <div id='questionDisplay'>
      <h1>
      {activeQ}
      </h1>
      <TeamSelect activeQuestion={activeQ} teams={teams} points={points} awardPoints={dispatchAwardPoints}/>
      <button id="show-answer">Show Answer</button>
    </div>
  )
}

const mapStateToProps = state => {
  if (!state.teams.length) {
    return {
      teams: false
    }
  }
  return {
    activeQ: state.categories[state.activeQuestion[0]].questions[state.activeQuestion[1]].name,
    points: state.categories[state.activeQuestion[0]].questions[state.activeQuestion[1]].value,
    teams: state.teams.map(team => team.name)
  }
};

export default withRouter(connect(mapStateToProps)(QuestionDisplay));
