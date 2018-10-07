import React from 'react';
import FlexQuizzes from './FlexQuizzes';
import SearchFormContainer from '../containers/SearchFormContainer';


const LoadQuizzes = props => {
  return (
    <div  id='load-screen'>
      <h2>Explore Public Quizzes</h2>
      <SearchFormContainer />
      {props.isLoading && <h4>Loading...</h4>}
      <FlexQuizzes loadQuiz={props.loadQuiz} quizzes={props.quizzes}/> 
    </div>
  )
}


export default LoadQuizzes;
