import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { restartGame } from '../actions';

const Navbar = (props) => {
    return (
        <nav id='main-nav'>
            <Link to={process.env.PUBLIC_URL + '/'}>
                <i className="fas fa-home" onClick={()=>props.dispatch(restartGame())}></i>
            </Link>
            <div id="right-links">
                <Link 
                to={process.env.PUBLIC_URL + '/login'} 
                className = "right-link">
                Login
                </Link>
                <Link 
                to={process.env.PUBLIC_URL + '/signup'} 
                className = "right-link">
                Sign Up
                </Link>
            </div>
        </nav>
    )
}

export default connect()(Navbar);