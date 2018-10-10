import React from 'react';
import QuestionButton from './QuestionButton';
import { Redirect } from 'react-router-dom';
import PlaySaveButton from './PlaySaveButton';
import MultiplierButtonContainer from '../containers/MultiplierButtonContainer';


const Board = ({title, categories, demo, loggedIn, quiz, unsavedChanges, hasSavedProgress, quizId, handleSaveClick}) => {
  if(!categories.length) {
    return <Redirect to={process.env.PUBLIC_URL + '/'}/>
  }
  const questionButtons = [];
  const isLive = categories[0].questions.length
  const className = isLive ? '' : 'demo'
  for(let i = 0; i< 25; i++) {
    const catIndex = i%5;
    const questIndex = Math.floor(i/5);
    const value = demo ? (questIndex+1)*100 : categories[catIndex].questions[questIndex].value;
    questionButtons.push(
      <QuestionButton
       key={`box-${i}`}
       value= {value}
       active= {categories[0].questions.length}
       catIndex = {catIndex}
       questIndex = {questIndex}></QuestionButton>)
  }

  const categoryBoxes = categories.map((cat, index) => {
    const key = `q-${index}`;
    const name = cat.name;
    return <p className='category blue-box' key={key}>{name}</p>;
  });

  return (
    <div className={className} id='board'>
      <h1>{title}</h1>
      {!demo && <MultiplierButtonContainer />}
      {!demo && loggedIn && unsavedChanges &&
        <PlaySaveButton
        handleClick={() => handleSaveClick(quiz, hasSavedProgress, quizId)}
        text='Save Progress'
        isSave={true} />
      }
      <div id='boxes'>
        {categoryBoxes}
        {questionButtons}
      </div>
    </div>
  )
}

export default Board;
