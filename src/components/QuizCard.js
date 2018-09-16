import React from 'react';

const QuizCard = props => {
    console.log(props.game)
    const {name, categories} = props.game
    return (
        <div className="quiz-card" onClick={props.handleClick}>
            <h3>{name}</h3>
            <p><span style={{fontWeight: 'bold'}}>Created by </span><a href='#'>kdybvig</a></p>
            <p>This is a placeholder for the description property.</p>
            {categories.map((category, index) => {
                return <h5 key={index}>{category.name}</h5>
            })}
        </div>
  )
}

export default QuizCard