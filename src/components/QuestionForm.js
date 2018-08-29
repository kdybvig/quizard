import React from 'react';
import { connect } from 'react-redux';
import { addQuestions } from '../actions';
import { withRouter } from 'react-router-dom';

const QuestionForm = (props) => {

  if(!props.categories) props.history.push(process.env.PUBLIC_URL + '/')

  const renderInputs = () => {
    const inputs = [];
    for (let i=0; i<10; i++) {
      const key = `cat-${i}`
      const questNum = Math.floor(i/2) + 1;
      const className = i%2 === 0 ? 'questContainer' : 'questContainer ansContainer'
      
      const label = i%2 === 0 ? 
        `Question ${questNum} (${questNum*100})` : `Answer` 
      const input = <textarea cols='50' rows='2' maxLength='250' className='qInput' required/>
      inputs.push(
        <div className={className} key={key}>
          <h5>{label}</h5>
          {input}
        </div>
      )
    }
    return inputs;
  }

  const testSubmit = (e) => {
    e.preventDefault();
    const formChildren = Array.from(e.target.childNodes);
    const questContainerNodes  = formChildren.filter(node => node.className==='questContainer');
    const questNodes = questContainerNodes.map(container => {
      const questNode = Array.from(container.childNodes).filter(node => node.className==='qInput')
      return questNode;
    });
    const questions = questNodes.map((node, index) => {
      return {name: node[0].value, answered: false, value: 100*(index + 1)};
    })
    questNodes.forEach(node => node[0].value='')
    const isLastCat = props.catIndex === 4
    props.dispatch(addQuestions(questions));
    if(isLastCat) props.history.push(process.env.PUBLIC_URL + '/addteams')
  }


  return (
    <div className='form-page'>
      <form onSubmit={testSubmit}>
        <h1>{props.title}</h1>
        <h4>Category: {props.categories[props.catIndex].name}</h4>
        {renderInputs()}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  categories: state.categories,
  catIndex: state.catIndex,
  title: state.title
})


export default withRouter(connect(mapStateToProps)(QuestionForm));
