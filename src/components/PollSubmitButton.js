import React from 'react';

class PollSubmitButton extends React.Component{
    render() {
        return (
            <button onClick={this.props.fetchQuestion()} className="btn btn-success">Get Next Question</button>
        );
    }
}

export default PollSubmitButton;