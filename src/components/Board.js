import React from 'react';
import QuestionButton from '../containers/QuestionButton';


const Board = ({title, categories}) => {
  const questionButtons = [];
  for(let i = 0; i< 25; i++) {
    const catIndex = i%5;
    const questIndex = Math.floor(i/5);
    const value = questIndex*100 + 100;
    questionButtons.push(
      <QuestionButton
       key={`box-${i}`}
       value= {value}
       catIndex = {catIndex}
       questIndex = {questIndex}></QuestionButton>)
  }

  const categoryBoxes = categories.map((cat, index) => {
    const key = `q-${index}`;
    const name = cat.name;
    return <p className='category' key={key}>{name}</p>;
  });
  return (
    <div id='board'>
      <h1>{title}</h1>
      <div id='boxes'>
        {categoryBoxes}
        {questionButtons}
      </div>
    </div>
  )
}

export default Board;
