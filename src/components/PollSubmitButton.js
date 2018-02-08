import React from 'react';

class PollSubmitButton extends React.Component{
    checkAnswer(event){
        event.preventDefault();
        console.log('checking');
        this.props.checkAnswer();
    }
    render(){
        return (
            <button onClick = {this.checkAnswer.bind(this)} className="btn btn-success">Go!</button>
        );
    }
}

export default PollSubmitButton;