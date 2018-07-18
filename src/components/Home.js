import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div id='home'>
      <h1>Welcome to Quizard!</h1>
      <h4><Link to={process.env.PUBLIC_URL + '/load'}>Load an existing quiz</Link></h4>
      <h4><Link to={process.env.PUBLIC_URL + '/create'}>Create a new quiz</Link></h4>
    </div>
  )
}

export default Home;
