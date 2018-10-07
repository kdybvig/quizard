import React from 'react';

const SearchForm = props => {
    const subjectOptions=['All', 'Math', 'English', 'Science', 'Social Studies', 'Computer Science', 'Trivia'];
    const gradeLevelOptions = ['All', 'K-5','6-8','9-12','Postsecondary']
    return (
        <form 
        id='search'
        onSubmit={props.handleSubmit}
        >
            <input 
            placeholder='Search quizzes' 
            id="search-for"
            onChange={props.handleInputChange}
            value={props.searchText}
            />
            <button type='submit' id="search-icon"><i className="fas fa-search"></i></button>
            <div className='selectors'>
                <div className='selector'>
                    <p>Subject:</p>
                    <select 
                    name='subject'
                    onChange={props.handleSelectChange}
                    value={props.filters.subject}
                    >
                        {subjectOptions.map((option, index) => {
                            return (
                                <option 
                                value={option === 'All' ? '' : option}
                                key={`subj-opt-` + index}
                                >
                                    {option}
                                </option>
                            )                    
                        })}
                    </select>
                </div>
                <div className='selector'>
                    <p>Grade Level:</p>
                    <select
                    name='grade'
                    onChange={props.handleSelectChange}
                    value={props.filters.grade}
                    >
                        {gradeLevelOptions.map((option, index) => {
                            return (
                                <option 
                                value={option === 'All' ? '' : option}
                                key={`grade-opt-` + index}
                                >
                                    {option}
                                </option>
                            )                    
                        })}
                    </select>
                </div>
            </div>
        </form>
    )
}

export default SearchForm;