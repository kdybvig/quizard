import { connect } from 'react-redux';
import Board from '../components/Board'

const mapStateToProps = state => ({
  myQuestions: state.questions
})


export default connect(
  mapStateToProps
)(Board)
