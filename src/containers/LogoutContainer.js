import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { logout } from '../actions';

class LogoutContainer extends Component {

    componentWillMount() {
        this.props.logout();
    }

    render() {
        return (
            <Redirect to={process.env.PUBLIC_URL + '/login'}/>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => {dispatch(logout())}
})

export default connect(null, mapDispatchToProps)(LogoutContainer);