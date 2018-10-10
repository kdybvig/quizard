import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { restartGame } from '../actions';

class CreateContainer extends Component {

    componentWillMount() {
        this.props.restartGame();
    }

    render() {
        return (
            <Redirect to={process.env.PUBLIC_URL + '/createquiz'}/>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    restartGame: () => {dispatch(restartGame())}
})

export default connect(null, mapDispatchToProps)(CreateContainer);