import React from 'react';
import { connect } from 'react-redux';
import { addTeams } from '../actions';
import { withRouter } from 'react-router-dom';

const TeamForm = (props) => {
  console.log(props.hasQuestions)
  if(!props.hasQuestions) props.history.push('/')
  const renderInputs = () => {
    const inputs = [];
    for (let i=0; i<5; i++) {
      const key = `cat-${i}`
      const input = <input maxLength='25' className='tInput' required/>
      const inputNotReq = <input maxLength='25' className='tInput'/>
      inputs.push(
        <div className='teamContainer' key={key}>
          <h5>{`Team ${i+1}`}</h5>
          {i > 1 ? inputNotReq : input}
        </div>
      )
    }
    return inputs;
  }

  const testSubmit = (e) => {
    e.preventDefault();
    const formChildren = Array.from(e.target.childNodes);
    const teamContainerNodes  = formChildren.filter(node => node.className==='teamContainer');
    const teamNodes = teamContainerNodes.map(container => {
      const teamNode = Array.from(container.childNodes).filter(node => {
        return node.className==='tInput' && node.value
      })[0]
      return teamNode;
    }).filter(node => node);
    const teams= teamNodes.map((node, index) => {
      return {name: node.value, points: 0};
    })
    teamNodes.forEach(node => node.value='')
    props.dispatch(addTeams(teams));
    props.history.push('/game/board')
  }


  return (
    <div className='form-page'>
      <h4>Enter Two To Five Team Names</h4>
      <form onSubmit={testSubmit}>
        {renderInputs()}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {

  return {
    hasQuestions: state.catIndex === 5
  }
};


export default withRouter(connect(mapStateToProps)(TeamForm));
