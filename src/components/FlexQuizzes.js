import React from 'react';
import QuizCard from './QuizCard';

const FlexQuizzes = props => {
    const emptyBoxes = [] 
    for(let i=0; i<4; i++) {
        emptyBoxes.push(<div key={'empty'+i} className='quiz-card empty-flex'></div>)
    }
    return (
        <div className='flex-container'>
            {
                props.quizzes.map((quiz,index) => {
                const key = `saved-quiz-${index}`
                return (
                    <QuizCard mine={props.mine} delete={props.delete} key={key} game={quiz} handleClick={() => props.loadQuiz(quiz)}/>
                )
                })
            }
            {emptyBoxes}
        </div> 
    )
}

export default FlexQuizzes;