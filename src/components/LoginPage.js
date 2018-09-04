import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUser, clearLoginError} from '../actions';


class LoginPage extends Component {
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
        this.props.dispatch(fetchUser(user));
    }

        componentWillUnmount = () => {
            this.props.dispatch(clearLoginError())
        }

    render() {
        
        if(this.props.user.username !== undefined) {
            return <Redirect to={process.env.PUBLIC_URL + '/'} />
        }

        return (
            <div className='login-box'>
                <h1>Login</h1>
                {this.props.user.error && 
                    <div className="error-message">{this.props.user.error}</div>
                }
                <form onSubmit={this.handleSubmit}>
                <h5>Username</h5>
                <input 
                required 
                onChange={this.handleInputChange} 
                name ="username" 
                placeholder="Username"
                value={this.state.username}
                />
                <h5>Password</h5>
                <input 
                required 
                onChange={this.handleInputChange} 
                type="password" name="password" 
                placeholder="Password"
                value={this.state.password}
                />
                <a id="forgot-password">Forgot password?</a>
                <button type="submit">Sign In</button>
                </form>
                <p>Don't have an account? 
                    <Link to={process.env.PUBLIC_URL + '/signup'} > Sign up here.</Link>
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(LoginPage);