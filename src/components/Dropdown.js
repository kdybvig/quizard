import React from 'react';

const Dropdown = props => {
    return (
        <div>
            <p
            className = "right-link"
            onClick={props.openMenu}>
            {props.username} <i className="fas fa-caret-down"></i>
            </p> 
            <div className={props.showMenu ? "dropdown" : "dropdown hidden"}>
                <p
                className="right-link"
                onClick={props.logout}>
                    Logout
                </p>
            </div>      
        </div>
    )
}

export default Dropdown;