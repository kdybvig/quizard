import React from 'react';

const EditButton = props => {
    return (
        <div 
        className={`edit-button ${props.extraClass}`}
        onClick={props.handleClick}>{props.editText} <i className='fas fa-pen'></i></div>   
    )
}

export default EditButton