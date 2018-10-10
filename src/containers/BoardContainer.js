import { connect } from 'react-redux';
import Board from '../components/Board'
import {updateProgress} from '../actions';
import React, {Component} from 'react';
import {Prompt} from 'react-router-dom';
import { restartGame } from '../actions';

class BoardContainer extends Component {

  alertMessage = e => {
    if(this.props.unsavedChanges)e.returnValue = 'Leave page? Unsaved changes may be lost.';
  }
   

  componentDidMount () {
    window.addEventListener('beforeunload', this.alertMessage)
  }

  componentWillUnmount () {
    window.removeEventListener('beforeunload', this.alertMessage)
  }

  render() {
    return (
      <div>
      <Prompt 
      when={this.props.unsavedChanges} 
      message={location => /game/.test(location.pathname) ? true : 'Unsaved changes may be lost'}
      />
      <Board
      title={this.props.title}
      categories={this.props.categories}
      loggedIn={this.props.loggedIn}
      quiz={this.props.quiz}
      hasSavedProgress={this.props.hasSavedProgress}
      unsavedChanges={this.props.unsavedChanges}
      quizId={this.props.quizId}
      handleSaveClick={this.props.handleSaveClick}
      />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  title: state.title,
  categories: state.categories,
  loggedIn: Boolean(state.user.username),
  quiz: {
    name: state.title,
    categories: state.categories,
    description: state.description,
    owner: state.user.username,
    userId: state.user.userId,
    createdBy: state.createdBy,
    info: state.info,
    isComplete: true,
    isInProgress: true,
    teams: state.teams
  },
  hasSavedProgress: state.hasSavedProgress,
  unsavedChanges: state.unsavedChanges,
  quizId: state.quizId
})

const mapDispatchToProps = dispatch => {
  return {
    handleSaveClick: (quiz, hasSavedProgress, quizId) => {
      dispatch(updateProgress(quiz, hasSavedProgress, quizId))
    },
    restartGame: () => dispatch(restartGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer)
