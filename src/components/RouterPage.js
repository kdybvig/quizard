import React from 'react';
import { connect } from 'react-redux';
import { restartGame } from '../actions';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import LoadQuizzes from './LoadQuizzes';
import CategoryForm from './CategoryForm';
import QuestionForm from './QuestionForm';
import TeamForm from './TeamForm';
import TeamDisplay from './TeamDisplay';
import BoardContainer from './BoardContainer';
import QuestionDisplay from './QuestionDisplay';
import Home from './Home';
import '../CSS/Game.css';

const RouterPage = (props) => {
  return (
    <Router>
      <div className='game'>
        <nav><Link to={process.env.PUBLIC_URL + '/'}><i className="fas fa-home" onClick={()=>props.dispatch(restartGame())}></i></Link></nav>
        <Route exact path="/" component={Home}/>
        <Route path="/create" component={CategoryForm}/>
        <Route path="/load" component={LoadQuizzes}/>
        <Route path="/createquestions" component={QuestionForm}/>
        <Route path="/addteams" component={TeamForm}/>
        <Route path="/game" component={TeamDisplay}/>
        <Route path="/game/board" component={BoardContainer}/>
        <Route path="/game/question" component={QuestionDisplay}/>
      </div>
    </Router>
  )
}

export default connect()(RouterPage);
