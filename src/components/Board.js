import React from 'react';
import QuestionButton from './QuestionButton';
import { withRouter } from 'react-router-dom';
import PlaySaveButton from './PlaySaveButton';


const Board = ({title, categories, demo, history}) => {
  if(!categories.length) history.push(process.env.PUBLIC_URL + '/')
  const questionButtons = [];
  const isLive = categories[0].questions.length
  const className = isLive ? '' : 'demo'
  for(let i = 0; i< 25; i++) {
    const catIndex = i%5;
    const questIndex = Math.floor(i/5);
    const value = questIndex*100 + 100;
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
      {!demo && 
        <PlaySaveButton
        handleClick={()=> {console.log('saving progress')}}
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

export default withRouter(Board);
