import React from 'react';
import '../CSS/Game.css';
import Input from '../containers/Input';
import BoardContainer from '../containers/BoardContainer';
import { connect } from 'react-redux';
import { submitAction } from '../actions';



const Game = (props) => {
  const renderInputs = () => {
    const keys = ['q0','q1','q2','q3','q4'];
    const inputs = keys.map((key, index) => <Input key={key} index={index}/>);
    return inputs;
  }
  const testSubmit = (e) => {
    e.preventDefault();
    const formChildren = Array.from(e.target.childNodes);
    const inputNodes = formChildren.filter(item => item.value);
    const questions = inputNodes.map(inp => inp.value);
    props.dispatch(submitAction(questions))
  }

  console.log(props)
  return (
    <div className="Game">
      <h1>Team Review Game</h1>
      {props.submitted ?
        (<BoardContainer />) :
        (
          <form onSubmit={testSubmit}>
            {renderInputs()}
            <button type="submit">Submit</button>
          </form>
        )
      }
    </div>
  );
}

const mapStateToProps = state => ({
  submitted: state.submitted
})

export default connect(mapStateToProps)(Game);
