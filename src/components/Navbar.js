import React from 'react';
import { Link } from 'react-router-dom';
import DropdownContainer from '../containers/DropdownContainer'

const Navbar = (props) => {
    return (
        <nav id='main-nav'>
            <Link to={process.env.PUBLIC_URL + '/'}>
                <i id="home-link" className="fas fa-home" onClick={()=>props.restartGame()}></i>
            </Link>
            <div id="right-links">
                {props.user.username ?
                <DropdownContainer />:
                <div>
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
                }
            </div>
        </nav>
    )
};

export default Navbar;