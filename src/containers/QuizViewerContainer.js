import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuizViewer from '../components/QuizViewer'

class QuizViewerContainer extends Component {
    state = {
        redirect: false
    }

    handlePlayClick = () => {
        this.setState({redirect: true})
    }

    render() {
        return (
            <QuizViewer 
            handlePlayClick = {this.handlePlayClick}
            redirect={this.state.redirect}
            title={this.props.title}
            description={this.props.description}
            categories={this.props.categories}
            />
        )
    }
}

const mapStateToProps = state => {
    const {title, description, categories} = state;
    return {
        title,
        description,
        categories
    }
}

export default connect(mapStateToProps)(QuizViewerContainer);