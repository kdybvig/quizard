import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div id='home'>
      <div id="main">
        <h1>Welcome to Quizard!</h1>
        <ul>
          <li><Link to={process.env.PUBLIC_URL + '/load'}>Load an existing quiz</Link></li>
          <li><Link to={process.env.PUBLIC_URL + '/create'}>Create a new quiz</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Home;
