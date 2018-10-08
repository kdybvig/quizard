import { connect } from 'react-redux';
import Board from '../components/Board'
import {updateProgress} from '../actions';

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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)