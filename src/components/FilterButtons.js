import React from 'react';

const FilterButtons = props => {
    return (
        <div className='filter-buttons'>
            {props.buttons.map((button,index) => {
                const key=`filter-button-${index}`
                return (
                    <button 
                    key={key}
                    className={button === props.filter ? 'selected' : ''}
                    onClick={() => props.handleClick(button)}>{button}</button>
                )
            })}
        </div>
    )
}

export default FilterButtons