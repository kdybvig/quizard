import React from 'react';

const MultiplierButton = props => {
    return (
        <button 
        className='multiplier-button'
        onClick={props.handleClick}>
            {props.text}
        </button>    
    )
}

export default MultiplierButton