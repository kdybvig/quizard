import React from 'react';
import QuizInfoSelect from './QuizInfoSelect';

const QuizInfoSelectors = props => {
    const subjectOptions = ['Please select...','Math', 'English', 'Science', 'Social Studies', 'Other'];
    const gradeLevelOptions = ['Please select...','K-5', '6-8', '9-12', 'Postsecondary', 'Other', 'N/A'];
    const visibilityOptions = ['Public', 'Private'];
    const selects = [
        {name: 'Subject', stateKey: 'subject', options: subjectOptions},
        {name: 'Grade Level', stateKey: 'gradeLevel', options: gradeLevelOptions},
        {name: 'Visibility', stateKey: 'visibility', options: visibilityOptions}
    ]
    return (
        <div className="quiz-info" id="quiz-info-selectors">
            {selects.map((select,index) => {
                return (
                    <div className='info-selector' key={`selector-${index}`}>
                        <h6>{select.name}</h6>
                        <QuizInfoSelect 
                        options={select.options} 
                        stateKey={select.stateKey}
                        handleChange={props.handleChange}
                        />
                    </div>
                )
                

            })}
        </div>
    )
}

export default QuizInfoSelectors