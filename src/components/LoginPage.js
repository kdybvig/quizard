import React from 'react';
import {Link, Redirect} from 'react-router-dom';


const LoginPage = props => {
        
    if(props.user.username !== undefined) {
        return <Redirect to={process.env.PUBLIC_URL + '/'} />
    }

    return (
        <div className='login-box'>
            <h1>Login</h1>
            {props.user.error && 
                <div className="error-message">{props.user.error}</div>
            }
            <form onSubmit={props.handleSubmit}>
            <h5>Username</h5>
            <input 
            required 
            onChange={props.handleInputChange} 
            name ="username" 
            placeholder="Username"
            value={props.username}
            />
            <h5>Password</h5>
            <input 
            required 
            onChange={props.handleInputChange} 
            type="password" name="password" 
            placeholder="Password"
            value={props.password}
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

export default LoginPage;