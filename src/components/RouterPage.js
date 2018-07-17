import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import LoadQuizzes from './LoadQuizzes';
import CategoryForm from '../containers/CategoryForm';
import QuestionForm from '../containers/QuestionForm';
import TeamForm from '../containers/TeamForm';
import TeamDisplay from './TeamDisplay';
import BoardContainer from '../containers/BoardContainer';
import QuestionDisplay from './QuestionDisplay';
import Home from './Home';
import '../CSS/Game.css';

const RouterPage = (props) => {
  return (
    <Router>
      <div className='game'>
        <nav><Link to='/'><i class="fas fa-home"></i></Link></nav>
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

export default RouterPage;
