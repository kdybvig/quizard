import React from 'react';

const TeamDisplay = ({teams}) => {
  return (
    <div id='teams'>
      {teams.map((team,index) => {
        const key = `team-${index}`
        return (
          <div key={key} className='team'>
            <h5 className = 'team-name'>{team.name}</h5>
            <h7 className = 'team-points'>{team.points}</h7>
          </div>
        )
      })}
    </div>
  )
}

export default TeamDisplay;
