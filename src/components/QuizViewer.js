import React from 'react';
import {Redirect} from 'react-router-dom';
import QuizInfoSelectorsContainer from '../containers/QuizInfoSelectorsContainer';
import QuizInfoContainer from '../containers/QuizInfoContainer';
import EditCategoryContainer from '../containers/EditCategoryContainer'
import EditTitleContainer from '../containers/EditTitleContainer';
import PlaySaveButton from './PlaySaveButton';
import ErrorMessage from './ErrorMessage';

const QuizViewer = props => {
  if(props.redirect) {
      return (
          <Redirect to={process.env.PUBLIC_URL + '/addteams'}/>
      )
  }

  const isSave = props.unsavedChanges || !props.isComplete;

  return (
    <div id="quiz-viewer">
    <h1>{props.title} </h1>
    <h3>{props.description}</h3>
    <PlaySaveButton 
    handleClick={isSave ? props.handleSaveClick : props.handlePlayClick}
    isSave={isSave}
    text={isSave ? 'Save Quiz' : 'Launch Quiz'}/>
    {props.errorMessage && <ErrorMessage text={props.errorMessage}/>}
    {props.ownedByUser && <EditTitleContainer />}
        {props.ownedByUser ?
            <QuizInfoSelectorsContainer /> :
            <QuizInfoContainer />
        }
        <div className="category-boxes">
            { props.categories.map((cat, catIndex) => {
                const key=`cat-${catIndex}`
                return (
                    <div key={key} className="category-box">
                        <h4 className="catName">{cat.name}</h4>
                        {props.ownedByUser && <EditCategoryContainer catIndex={catIndex}/>}
                        {cat.questions.map((quest,questIndex) => {
                            const num = questIndex + 1;
                            const questKey = `quest-${catIndex}${questIndex}`
                            return (
                                <div className ='q-and-a' key={questKey}>
                                    <h6><span className="qa-letter">Q{num}:</span> {quest.name}</h6>
                                    {
                                        quest.answer ?
                                        <h6><span className="qa-letter">A{num}:</span> {quest.answer}</h6> :
                                        <h6><span className="qa-letter">A{num}: No Answer</span></h6> 
                                    }
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default QuizViewer