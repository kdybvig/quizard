import React from 'react';

const EditCategory = props => {
    return (
        <div 
        className='cat-edit-button' 
        onClick={props.handleClick}>Edit <i className='fas fa-pen'></i></div>   
    )
}

export default EditCategory