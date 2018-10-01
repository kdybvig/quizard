import React, {Component} from 'react';
import {connect} from 'react-redux';
import MyQuizzes from '../components/MyQuizzes';
import {fetchQuizzesByUser, loadQuiz} from '../actions';
import {Redirect} from 'react-router-dom';

class MyQuizzesContainer extends Component {
    
    componentDidMount() {
        this.props.fetchQuizzesByUser(this.props.username);
    }
    
    state = {
        redirect: ''
    }


    loadQuiz = quiz => {
        this.props.loadQuiz(quiz)
        const redirect = quiz.isInProgress ?  '/game/board' : '/viewquiz'
        this.setState({redirect})
    }

    render () {
        if(this.state.redirect && this.props.isLoaded) {
            return <Redirect to={process.env.PUBLIC_URL + this.state.redirect} />
        }
        return (
            <MyQuizzes 
            loadQuiz={this.loadQuiz}
            quizzes={this.props.quizzes}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.user.username,
        quizzes: state.userQuizzes,
        isLoading: state.isLoading,
        isLoaded: Boolean(state.quizId)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchQuizzesByUser: username => dispatch(fetchQuizzesByUser(username)),
        loadQuiz: quiz => dispatch(loadQuiz(quiz))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyQuizzesContainer)