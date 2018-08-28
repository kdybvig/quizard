import React from 'react';

const LoginPage = (props) => {
    return (
        <div id='login-box'>
            <h1>Login</h1>
            <h5>Username</h5>
            <input placeholder="Username"/>
            <h5>Password</h5>
            <input placeholder="Password"/>
            <button>Sign In</button>
        </div>
    )
}

export default LoginPage;