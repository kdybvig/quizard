import React from 'react';
import { connect } from 'react-redux';
import '../CSS/Game.css';
import BoardContainer from '../containers/BoardContainer';
import CategoryForm from '../containers/CategoryForm';



const Game = (props) => {
  return (
    <div className="Game">
      {props.submitted ?
        <BoardContainer /> : <CategoryForm />
      }
    </div>
  );
}

const mapStateToProps = state => ({
  submitted: state.submitted
})

export default connect(mapStateToProps)(Game);
CategoryForm
