import React from 'react';

const LoginPage = (props) => {
    return (
        <div class='login-box'>
            <h1>Login</h1>
            <h5>Username</h5>
            <input placeholder="Username"/>
            <h5>Password</h5>
            <input placeholder="Password"/>
            <a>Forgot password?</a>
            <button>Sign In</button>
        </div>
    )
}

export default LoginPage;