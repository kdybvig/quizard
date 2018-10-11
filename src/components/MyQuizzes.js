import React from 'react';
import FlexQuizzes from './FlexQuizzes';
import FilterButtons from './FilterButtons';

const MyQuizzes = props => {
    const quizContainerHeaders = ['Under Construction', 'Ready To Play', 'Games In Progress']
    const quizPropKeys = ['underConstruction', 'readyToPlay', 'inProgress']
    const buttons = ['All', ...quizContainerHeaders]
    const {filter} = props;
    const filteredContainers = quizContainerHeaders.filter(header => (filter === 'All' || filter === header))
    return (
        <div id="my-quizzes">
            <h1>My Quizzes</h1>
            <FilterButtons buttons={buttons} handleClick={props.changeFilter} filter={filter}/>
            <div className ={'quizzes-grid-wrapper show-one'}>
            {filteredContainers.map((header) => {
                const headerIndex = quizContainerHeaders.indexOf(header);
                const contKey = `quizContainer-${headerIndex}`;
                return (
                    <div key={contKey} className='quizzes-container'>
                        <h2>{header}</h2>
                        <div className='quiz-card-container'>
                        {props.quizzes[quizPropKeys[headerIndex]].length ? (
                            <FlexQuizzes 
                            quizzes={props.quizzes[quizPropKeys[headerIndex]]} 
                            loadQuiz={props.loadQuiz}
                            mine={true}
                            delete={props.delete}
                            />
                        ) :  (
                            <p className='default-text'>
                                {`You do not have any ${headerIndex === 2 ? '' : 'quizzes '}${header.toLowerCase()}.`}
                            </p>
                        )
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