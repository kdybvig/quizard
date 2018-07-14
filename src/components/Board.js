import React from 'react';


const Board = ({title, categories}) => {
  return (
    <div id='board'>
      <h1>{title}</h1>
      <div id='categories'>
      {
        categories.map((qq, index) => {
          const key = `q-${index}`
          return <p key={key}>{qq}</p>
        })
      }
      </div>
    </div>
  )
}

export default Board;
