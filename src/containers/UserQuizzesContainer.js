import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadQuiz, fetchPublicQuizzesByUser } from '../actions';
import UserQuizzes from '../components/UserQuizzes';
import { withRouter } from 'react-router-dom';

class UserQuizzesContainer extends Component {

    user = this.props.match.params.user;

    componentDidMount() {
     this.props.fetchQuizzes(this.user);
    }

    loadQuiz = quiz => {
        this.props.history.push(process.env.PUBLIC_URL + '/viewquiz');
        this.props.loadQuiz(quiz);
    }

    render() {
        console.log(this.user, this.props.quizzes)
        return (
            <UserQuizzes 
            quizzes={this.props.quizzes}
            isLoading={this.props.isLoading}
            loadQuiz={this.loadQuiz}
            user={this.user}
            />
        )
    }
}

const mapStateToProps = state => ({
  quizzes: state.loadedQuizzes,
  isLoading: state.isLoading
})

const mapDispatchToProps = dispatch => ({
  fetchQuizzes: username => dispatch(fetchPublicQuizzesByUser(username)),
  loadQuiz: quiz => dispatch(loadQuiz(quiz))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserQuizzesContainer));