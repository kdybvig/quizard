import React from 'react';
import QuizInfoSelectors from '../components/QuizInfoSelectors';
import { connect } from 'react-redux';
import { addQuizInfo } from '../actions';

const QuizInfoSelectorsContainer = props => {
    const handleChange = e => {
        e.preventDefault();
        const stateKey = e.target.getAttribute('statekey');
        const stateVal = e.target.value;
        const info = {...props.info};
        info[stateKey] = stateVal;
        props.addQuizInfo(info);
    }

    return (
        <QuizInfoSelectors handleChange={handleChange} info={props.info}/>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addQuizInfo: info => dispatch(addQuizInfo(info))
    }
}

const mapStateToProps = state => {
    return {
        info: state.info
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizInfoSelectorsContainer)