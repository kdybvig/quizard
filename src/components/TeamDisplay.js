import React from 'react';
import { connect } from 'react-redux';
import {awardPoints} from '../actions';


const TeamDisplay = ({teams, awardPoints}) => {
  if (!teams.length) return<div></div>;
  return (
    <div id='teams'>
      {
        teams.map((team,index) => {
        const key = `team-${index}`
        return (
          <div key={key} className='team'>
            <h5 className = 'team-name'>{team.name}</h5>
            <button onClick={()=>awardPoints(-100, team.name)} className='bonus-penalty minus'>-</button>
            <button onClick={()=>awardPoints(100, team.name)} className='bonus-penalty plus'>+</button>
            <h6 className = 'team-points'>{team.points}</h6>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => ({
  teams: state.teams
});

const mapDispatchToProps = dispatch => ({
  awardPoints: (points, team) => {
    dispatch(awardPoints(points, team))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamDisplay);
