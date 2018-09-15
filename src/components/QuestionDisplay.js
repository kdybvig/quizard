import React, { Component } from 'react';
import { connect } from 'react-redux';
import TeamSelect from './TeamSelect';
import { awardPoints } from '../actions';
import { withRouter, Redirect } from 'react-router-dom';

class QuestionDisplay extends Component {
  state = {
    showAnswer: false
  }

  dispatchAwardPoints = (points, team) => {
    this.props.dispatch(awardPoints(points, team));
    this.props.history.push(process.env.PUBLIC_URL + '/game/board')
  }

  toggleAnswer = () => {
    const showAnswer = !this.state.showAnswer;
    this.setState({
      showAnswer: showAnswer
    })
  }
  render () {
    if(!this.props.teams) {
      return<Redirect to={process.env.PUBLIC_URL + '/'} />
    }

    return (
      <div id='questionDisplay'>
        <h1>
        {this.state.showAnswer ? this.props.answer : this.props.activeQ}
        </h1>
        <TeamSelect 
        activeQuestion={this.props.activeQ} 
        teams={this.props.teams} 
        points={this.props.points} awardPoints={this.dispatchAwardPoints}/>
       {this.props.answer  && <button onClick={this.toggleAnswer} id="show-answer">
       {this.state.showAnswer ? 'Show Question' : 'Show Answer'}
       </button>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  if (!state.teams.length) {
    return {
      teams: false
    }
  }

  const activeQuestion = state.categories[state.activeQuestion[0]].questions[state.activeQuestion[1]];
  return {
    activeQ: activeQuestion.name,
    points: activeQuestion.value,
    answer: activeQuestion.answer,
    teams: state.teams.map(team => team.name)
  }
};

export default withRouter(connect(mapStateToProps)(QuestionDisplay));
