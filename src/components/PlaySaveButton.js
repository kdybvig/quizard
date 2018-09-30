import React from 'react';

const PlaySaveButton = props => {
    const icon = props.isSave ? 'fa-save' : 'fa-play';
    const class2 = props.isSave ? 'save' : 'play';
    return (
        <button 
        className={`play-save-btn ${class2}`} 
        onClick={props.handleClick}>{props.text} <i className={`fas ${icon}`}></i></button>
    )
};

export default PlaySaveButton;