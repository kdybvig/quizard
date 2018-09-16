import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTeams } from '../actions';
import { withRouter, Redirect } from 'react-router-dom';

class TeamForm extends Component {

  state = {
    teams: ['','','','',''],
    error: false
  }

  handleInputChange = e => {
    e.preventDefault();
    const index = e.target.getAttribute('index');
    const teams = this.state.teams.slice();
    teams[index]= e.target.value;
    this.setState({
      teams: teams
    });
  }

  
  renderInputs = () => {
    const inputs = [];
    for (let i=0; i<5; i++) {
      const key = `cat-${i}`;
      const isRequired = i < 2;
      const input = (
        <input 
        maxLength='25' 
        className='tInput' 
        onChange={this.handleInputChange}
        value={this.state.teams[i]}
        index={i}
        required={isRequired}/>
      );
      inputs.push(
        <div className='teamContainer' key={key}>
          <h5>{`Team ${i+1}`}</h5>
          {input}
        </div>
      )
    }
    return inputs;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const teams = this.state.teams.filter(team => team)
    const hasDuplicates = teams.findIndex((team,index) => teams.indexOf(team) !== index) !== -1;
    if(hasDuplicates) {
      this.setState({error: true});
      return;
    }
    const teamObjects = teams.map(team => {return {name: team, points: 0}})
    this.props.dispatch(addTeams(teamObjects));
    this.props.history.push(process.env.PUBLIC_URL + '/game/board');
  }

  render () {
    if(!this.props.hasQuestions) {
      return <Redirect to={process.env.PUBLIC_URL + '/'} />
    }

    return (
      <div className='form-page'>
        <h4>Enter Two To Five Team Names</h4>
        {this.state.error && 
          <div className="error-message">Team names must be unique.</div>
        }
        <form onSubmit={this.handleSubmit}>
          {this.renderInputs()}
          <button type="submit">Play</button>
        </form>
      </div>
    )
  }
  
}

const mapStateToProps = state => {

  return {
    hasQuestions: state.catIndex === 5
  }
};


export default withRouter(connect(mapStateToProps)(TeamForm));
