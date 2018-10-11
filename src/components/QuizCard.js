import React from 'react';
import {Link} from 'react-router-dom';

const QuizCard = props => {
    const {name, categories, description, teams, createdBy, _id, owner} = props.game
    return (
        <div className="quiz-card" onClick={props.handleClick}>
            {props.mine && (
                <button 
                onClick={e => {
                    e.stopPropagation()
                    props.delete(_id, owner)}
                } 
                className='delete'
                >X</button>
            )}
            <h3>{name}</h3>
            <p>
                <span style={{fontWeight: 'bold'}}>Created by </span>
                <Link 
                to={`${process.env.PUBLIC_URL}/user/${createdBy}`} 
                onClick={e=>{e.stopPropagation()}}>{createdBy}</Link>
            </p>
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