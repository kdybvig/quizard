import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuizViewer from '../components/QuizViewer';
import {saveQuiz} from '../actions';

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
        infoKeys.forEach(key => {
            if(!this.props.info[key]) saveErrors.push(key)
        });
        if (saveErrors.length) return;
        this.props.saveQuiz({info: this.props.info}, this.props.quizId)
    }

    render() {
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
            />
        )
    }
}

const mapStateToProps = state => {
    const {title, description, categories, owner, user, unsavedChanges, info, quizId} = state;
    return {
        title,
        description,
        categories,
        info,
        ownedByUser: user.username === owner,
        unsavedChanges,
        quizId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveQuiz: (changes, quizId) => dispatch(saveQuiz(changes,quizId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizViewerContainer);