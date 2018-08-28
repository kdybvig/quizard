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
            <Link 
             to={process.env.PUBLIC_URL + '/login'} 
             id = "login-link">
             Login
            </Link>
        </nav>
    )
}

export default connect()(Navbar);