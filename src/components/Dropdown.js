import React from 'react';
import {Link} from 'react-router-dom';

const Dropdown = props => {
    return (
        <div>
            <p
            className = "right-link"
            onClick={props.openMenu}>
            {props.username} <i className="fas fa-caret-down"></i>
            </p> 
            <div className={props.showMenu ? "dropdown" : "dropdown hidden"}>
                <Link 
                className="right-link" 
                to={process.env.PUBLIC_URL + '/myquizzes'} >
                    My Quizzes
                </Link>
                <Link 
                className="right-link" 
                to={process.env.PUBLIC_URL + '/create'} >
                    Create <i className='fas fa-plus'></i>
                </Link>
                <Link 
                className="right-link" 
                to={process.env.PUBLIC_URL + '/load'} >
                    Explore <i className='fas fa-search'></i>
                </Link>
                <Link
                className="right-link"
                to={process.env.PUBLIC_URL + '/logout'}>
                    Logout
                </Link>
            </div>      
        </div>
    )
}

export default Dropdown;