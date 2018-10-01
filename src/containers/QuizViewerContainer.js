import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuizViewer from '../components/QuizViewer';
import {saveQuiz} from '../actions';
import {Redirect} from 'react-router-dom';

class QuizViewerContainer extends Component {
    state = {
        redirect: false,
        saveErrors: []
    }

    handlePlayClick = () => {
        this.setState({redirect: true});
    }

    handleSaveClick = () => {
        const saveErrors = [];
        const infoKeys = Object.keys(this.props.info);
        const isComplete = (
            this.props.categories.findIndex(cat => cat.questions.length === 0) === -1
        ) 
        infoKeys.forEach(key => {
            if(!this.props.info[key]) saveErrors.push(key)
        });
        if (saveErrors.length) return;
        this.props.saveQuiz({info: this.props.info, isComplete}, this.props.quizId)
    }

    render() {
        if(!this.props.quizId) return <Redirect to={process.env.PUBLIC_URL + '/load'} />
        if(this.props.catIndex !== 5) return <Redirect to={process.env.PUBLIC_URL + '/createQuestions'} />
        return (
            <QuizViewer 
            handlePlayClick = {this.handlePlayClick}
            redirect={this.state.redirect}
            title={this.props.title}
            description={this.props.description}
            categories={this.props.categories}
            ownedByUser={this.props.ownedByUser}
            handleSaveClick={this.handleSaveClick}
            unsavedChanges={this.props.unsavedChanges}
            isComplete={this.props.isComplete}
            />
        )
    }
}

const mapStateToProps = state => {
    const {title, description, categories, owner, user, unsavedChanges, info, quizId, catIndex, isComplete} = state;
    return {
        title,
        description,
        categories,
        info,
        ownedByUser: user.username === owner,
        unsavedChanges,
        quizId,
        catIndex,
        isComplete
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveQuiz: (changes, quizId) => dispatch(saveQuiz(changes,quizId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizViewerContainer);