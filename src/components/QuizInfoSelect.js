import React from 'react';

const QuizInfoSelect = props => {
    return (
        <select value={props.value} statekey={props.stateKey} onChange={props.handleChange}>
            {props.options.map((option,index) => {
                return (
                <option 
                value={option === 'Please select...' ? '' : option} 
                disabled={!index}  
                hidden={!index}
                key={`opt-${index}`}>
                    {option}
                </option>
            )
            })}
        </select>
    )
}

export default QuizInfoSelect