import React from 'react';

const TeamSelect = ({teams, points, awardPoints, activeQuestion}) => {
  const renderTeamOptions = () => {
    const options = teams.map((team,index) => {
      const key = `option-${index}`;
      return <option key={key} value={team}>{team}</option>
    })
    return options;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const team = e.target.childNodes[0].value;
    if(activeQuestion) awardPoints(points, team)
    return;
  }
  return (
    <form id='team-select-form' onSubmit={handleSubmit}>
      <select id='team-select'>
        <option value=''>No Points Awarded</option>
        {renderTeamOptions()}
      </select>
      <button type="submit">Award Points</button>
    </form>
  )
}

export default TeamSelect;
