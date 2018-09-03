import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = (props) => {
    return (
        <div class='login-box'>
            <h1>Register</h1>
            <h5>Username</h5>
            <input placeholder="Username"/>
            <h5>Email</h5>
            <input placeholder="Email"/>
            <h5>Password</h5>
            <input placeholder="Password"/>
            <h5>Confirm Password</h5>
            <input placeholder="Password"/>
            <button>Sign Up</button>
            <p>Already have an account? 
                <Link to={process.env.PUBLIC_URL + '/login'} > Sign in here.</Link>
            </p>
        </div>
    )
}

export default SignUp;