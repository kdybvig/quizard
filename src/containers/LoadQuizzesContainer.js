import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadQuiz, fetchQuizzes } from '../actions';
import LoadQuizzes from '../components/LoadQuizzes';
import { withRouter } from 'react-router-dom';

class LoadQuizzesContainer extends Component {

  componentDidMount() {
    this.props.fetchQuizzes();
  }

  loadQuiz = quiz => {
    this.props.history.push(process.env.PUBLIC_URL + '/viewquiz');
    this.props.loadQuiz(quiz);
  }

  render() {
    console.log(this.props.quizzes)
    return (
      <LoadQuizzes 
      quizzes={this.props.quizzes}
      isLoading={this.props.isLoading}
      loadQuiz={this.loadQuiz}
      />
    )
  }
}

const mapStateToProps = state => ({
  quizzes: state.loadedQuizzes,
  isLoading: state.isLoading
})

const mapDispatchToProps = dispatch => ({
  fetchQuizzes: () => dispatch(fetchQuizzes()),
  loadQuiz: quiz => dispatch(loadQuiz(quiz))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadQuizzesContainer));
