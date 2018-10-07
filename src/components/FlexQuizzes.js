import React from 'react';
import QuizCard from './QuizCard';

const FlexQuizzes = props => {
    const emptyBoxes = [] 
    for(let i=0; i<4; i++) {
        emptyBoxes.push(<div className='quiz-card empty-flex'></div>)
    }
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
            {emptyBoxes}
        </div> 
    )
}

export default FlexQuizzes;