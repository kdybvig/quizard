import React from 'react';
import QuizCard from './QuizCard';

const FlexQuizzes = props => {
    return (
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
    )
}

export default FlexQuizzes;