import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = (props) => {
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
            <input required type="password" placeholder="Password"/>
            <button>Sign Up</button> 
            <p>Already have an account? 
                <Link to={process.env.PUBLIC_URL + '/login'} > Sign in here.</Link>
            </p>
        </div>
    )
}

export default SignUp;