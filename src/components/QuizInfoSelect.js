import React from 'react';

const QuizInfoSelect = props => {
    
    return (
        <select>
            {props.options.map((option,index) => {
                <option value={index}>{option}</option>
            })}
        </select>
    )
}

export default QuizInfoSelect