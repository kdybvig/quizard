import React from 'react';


const Board = ({myQuestions}) => {
  return (
    <div>
      {myQuestions.map(qq => <p>{qq}</p>)}
    </div>
  )
}

export default Board;
