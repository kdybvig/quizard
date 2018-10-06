import React from 'react';
import FlexQuizzes from './FlexQuizzes';


const LoadQuizzes = props => {
  return (
    <div  id='load-screen'>
      <h2> Choose A Quiz To Load </h2>
      {props.isLoading && <h4>Loading...</h4>}
      <FlexQuizzes loadQuiz={props.loadQuiz} quizzes={props.quizzes}/> 
    </div>
  )
}


export default LoadQuizzes;
