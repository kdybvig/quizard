import React from 'react';
import FlexQuizzes from './FlexQuizzes';

const UserQuizzes = props => {
    return (
        <div id='load-screen'>
            <h1>{props.user}'s Public Quizzes</h1>
            <FlexQuizzes loadQuiz={props.loadQuiz} quizzes={props.quizzes}/>
        </div>
    )
}

export default UserQuizzes