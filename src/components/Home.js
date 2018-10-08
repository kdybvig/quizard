import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div id='home'>
      <div id="main">
        <h2>Welcome to</h2>
        <h1>Quizard</h1>
        <ul>
          <li><Link to={process.env.PUBLIC_URL + '/load'}>Explore public quizzes</Link></li>
          <li><Link onClick={props.restartGame} to={process.env.PUBLIC_URL + props.linkTwo}>{props.linkTwoText}</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Home;
