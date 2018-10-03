import React from 'react';

const ErrorMessage = props => {
    console.log(props.text)
    return (
        <div className="error-message">{props.text}</div>
    )
}

export default ErrorMessage