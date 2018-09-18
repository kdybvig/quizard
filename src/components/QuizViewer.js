import React from 'react';
import {Redirect} from 'react-router-dom';

const QuizViewer = props => {
 console.log('props',props)
  if(props.redirect) {
      return (
          <Redirect to={process.env.PUBLIC_URL + '/addteams'}/>
      )
  }
  return (
    <div id="quiz-viewer">
    <div className="heading">
        <h1>{props.title} </h1>
        <button id="play" onClick={props.handlePlayClick}><i className="fas fa-play"></i></button>
    </div>
        <h3>{props.description}</h3>
        <div className="category-boxes">
            { props.categories.map((cat, catIndex) => {
                const key=`cat-${catIndex}`
                return (
                    <div key={key} className="category-box">
                        <h4 className="catName">{cat.name}</h4>
                        {cat.questions.map((quest,questIndex) => {
                            const val = 100*(questIndex+1);
                            const questKey = `quest-${catIndex}${questIndex}`
                            return (
                                <div key={questKey}>
                                    <h6><span className="qa-letter">{val}:</span> {quest.name}</h6>
                                    {
                                        quest.answer ?
                                        <h6><span className="qa-letter">A:</span> {quest.name}</h6> :
                                        <button onClick={()=>console.log(catIndex,questIndex,quest.name)}>Add Answer</button>
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