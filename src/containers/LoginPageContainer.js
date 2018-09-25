import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser, clearLoginError} from '../actions';
import LoginPage from '../components/LoginPage';


class LoginPageContainer extends Component {
    state = {
        username: '',
        password: ''
    }

    handleInputChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        this.setState({
            username: '',
            password: ''
        })
        this.props.fetchUser(user);
    }

        componentWillUnmount = () => {
            this.props.clearLoginError()
        }

    render() {
        return (
            <LoginPage 
            username={this.state.username}
            password={this.state.password}
            user={this.props.user}
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
            />
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    clearLoginError: () => dispatch(clearLoginError()),
    fetchUser: user => dispatch(fetchUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);