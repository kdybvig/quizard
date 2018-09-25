import React from 'react';
import QuizCard from './QuizCard'


const LoadQuizzes = props => {
  return (
    <div  id='load-screen'>
      <h2> Choose A Quiz To Load </h2>
      {props.isLoading && <h4>Loading...</h4>}
      <div className='flex-container'>
        {
          props.quizzes.map((quiz,index) => {
  
            const key = `saved-quiz-${index}`
  
            return (
              <QuizCard key={key} game={quiz} handleClick={() => props.loadQuiz(quiz)}/>
            )
          })
        }
      </div>
    </div>
  )
}


export default LoadQuizzes;
