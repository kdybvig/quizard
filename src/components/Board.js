import React from 'react';


const Board = ({title, categories}) => {
  const arr = [];
  for(let i = 1; i< 26; i++) {
    const value = Math.ceil(i/5)*100
    arr.push(<p className='points'>{value}</p>)
  }

  const categoryBoxes = categories.map((qq, index) => {
    const key = `q-${index}`
    return <p className='category' key={key}>{qq}</p>
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
