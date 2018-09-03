import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
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
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        this.setState({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
        console.log(user);
    }
    render() {

        return (
            <div className='login-box'>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <h5>Username</h5>
                    <input 
                    required 
                    onChange={this.handleInputChange} 
                    name ="username" 
                    placeholder="Username"
                    value={this.state.username}
                    />
                    <h5>Email</h5>
                    <input 
                    required 
                    onChange={this.handleInputChange} 
                    type="email" 
                    name="email" 
                    placeholder="email"
                    value={this.state.email}
                    />
                    <h5>Password</h5>
                    <input 
                    required 
                    onChange={this.handleInputChange} 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={this.state.password}
                    />
                    <h5>Confirm Password</h5>
                    <input 
                    required 
                    onChange={this.handleInputChange} 
                    type="password" 
                    name="confirmPassword" 
                    placeholder="Confirm Password"
                    value={this.state.confirmPassword}
                    />
                    <button type="submit">Sign In</button>
                </form>
                <p>Already have an account? 
                    <Link to={process.env.PUBLIC_URL + '/login'} > Sign in here.</Link>
                </p>
            </div>
        )
    }
}

/*const SignUp = (props) => {
    return (
        <div className='login-box'>
            <h1>Register</h1>
            <h5>Username</h5>
            <input required placeholder="Username"/>
            <h5>Email</h5>
            <input required placeholder="Email"/>
            <h5>Password</h5>
            <input required type="password" placeholder="Password"/>
            <h5>Confirm Password</h5>
            <input required type="password" placeholder="Confirm Password"/>
            <button>Sign Up</button> 
            <p>Already have an account? 
                <Link to={process.env.PUBLIC_URL + '/login'} > Sign in here.</Link>
            </p>
        </div>
    )
} */

export default SignUp;