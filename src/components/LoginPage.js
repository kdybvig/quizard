import React from 'react';
import {Link} from 'react-router-dom'

const LoginPage = (props) => {
    return (
        <div class='login-box'>
            <h1>Login</h1>
            <h5>Username</h5>
            <input placeholder="Username"/>
            <h5>Password</h5>
            <input placeholder="Password"/>
            <a id="forgot-password">Forgot password?</a>
            <button>Sign In</button>
            <p>Don't have an account? 
                <Link to={process.env.PUBLIC_URL + '/signup'} > Sign up here.</Link>
            </p>
        </div>
    )
}

export default LoginPage;