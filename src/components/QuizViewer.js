import React from 'react';
import {Redirect} from 'react-router-dom';
import QuizInfoSelectorsContainer from '../containers/QuizInfoSelectorsContainer';
import QuizInfoContainer from '../containers/QuizInfoContainer';
import EditCategoryContainer from '../containers/EditCategoryContainer'

const QuizViewer = props => {
  if(props.redirect) {
      return (
          <Redirect to={process.env.PUBLIC_URL + '/addteams'}/>
      )
  }
  return (
    <div id="quiz-viewer">
    <h1>{props.title} </h1>
    {props.unsavedChanges ?
        <button id="play" className='save' onClick={props.handleSaveClick}>Save Quiz <i className="fas fa-save" style={{color: '#000099'}}></i></button> :
        <button id="play" onClick={props.handlePlayClick}>Launch Quiz <i className="fas fa-play"></i></button>
        }
    <h3>{props.description}</h3>
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