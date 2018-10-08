import React from 'react';
import QuizCard from './QuizCard';

const MyQuizzes = props => {
    const quizContainerHeaders = ['Under Construction', 'Ready To Play', 'Games In Progress']
    const quizPropKeys = ['underConstruction', 'readyToPlay', 'inProgress']
    return (
        <div id="my-quizzes">
            <h1>My Quizzes</h1>
            <div className ='quizzes-grid-wrapper'>
            {quizContainerHeaders.map((header, headerIndex) => {
                const contKey = `quizContainer-${headerIndex}`;
                return (
                    <div className='quizzes-flex-box'>
                        <div key={contKey} className='quizzes-container'>
                            <h2>{header}</h2>
                            {props.quizzes[quizPropKeys[headerIndex]].length ?
                                (props.quizzes[quizPropKeys[headerIndex]].map((quiz, quizIndex) => {
                                    const quizKey = `quiz-${headerIndex}-${quizIndex}`;
                                    return (
                                        <QuizCard key={quizKey} game={quiz} handleClick={() => props.loadQuiz(quiz)}/>
                                    )
                                })) :
                                <p className='default-text'>{`You do not have any ${headerIndex === 2 ? '' : 'quizzes '}${header.toLowerCase()}.`}</p>
                            }
                        </div>
                    </div>
                )
            })}
            </div>
        </div>  
    )
}

export default MyQuizzes