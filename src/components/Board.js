import React from 'react';
import QuestionButton from '../containers/QuestionButton';


const Board = ({title, categories}) => {
  console.log(categories, title)
  debugger;
  const arr = [];
  for(let i = 0; i< 25; i++) {
    const catIndex = i%5;
    const questIndex = Math.floor(i/5);
    const value = questIndex*100 + 100;
    arr.push(
      <QuestionButton
       className='points'
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
        {arr}
      </div>
    </div>
  )
}

export default Board;
