import React from 'react';

const QuizInfo = props => {
    const {subject, gradeLevel} = props.info;
    return (
        <div id="quiz-info">
            {subject && subject !== 'N/A' && 
                <h6><b>Subject:</b> {subject}</h6>}
            {gradeLevel && gradeLevel !== 'N/A' &&
                <h6><b>Grade Level:</b> {gradeLevel? gradeLevel : 'N/A'}</h6>}
        </div>
  )
}

export default QuizInfo