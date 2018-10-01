import React from 'react';

const QuizCard = props => {
    const {name, categories, description} = props.game
    return (
        <div className="quiz-card" onClick={props.handleClick}>
            <h3>{name}</h3>
            <p><span style={{fontWeight: 'bold'}}>Created by </span><a href='#'>kdybvig</a></p>
            <p>{description}</p>
            {categories.map((category, index) => {
                return <h5 key={index}>{category.name}</h5>
            })}
        </div>
  )
}

export default QuizCard