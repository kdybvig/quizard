import React from 'react';

const QuizCard = props => {
    const {name, categories, description, teams, createdBy} = props.game
    return (
        <div className="quiz-card" onClick={props.handleClick}>
            <h3>{name}</h3>
            <p><span style={{fontWeight: 'bold'}}>Created by </span><a href='#'>{createdBy}</a></p>
            <p>{description}</p>
            {teams.map((team, index) => {
                return <h5 style={{backgroundColor: 'black', textAlign: 'left', borderColor: 'black'}} key={'team-' + index}>{team.name}: {team.points}</h5>
            })}
            {categories.map((category, index) => {
                return <h5 key={index}>{category.name}</h5>
            })}
        </div>
  )
}

export default QuizCard