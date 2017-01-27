import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollSubmitButton from '../components/PollSubmitButton.js';
import $ from 'jQuery';

class PollContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checkedValue: [],
            header: '',
            questions: [],
            choices: [],
            numberOfQuestions: ''
        };

        this.setCheckedValue = this.setCheckedValue.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);

    }

    setCheckedValue(value){
       

        this.setState({
            checkedValue: value
        });
    }

    checkAnswer(event){
        event.preventDefault();
        if (this.state.checkedValue===this.state.correctAnswer){
            console.log('correct');
        }
    }





    componentWillMount() {
        console.log('componentWillMount()');
    }

    componentDidMount(){
        console.log('componentDidMount');
        this.serverRequest = $.get('http://localhost:8000/data/data.json', function (result) {
            this.setState({
                header: result.poll.header,
                questions: result.poll.questions,
                choices: result.poll.questions[0].choices,
                correctAnswer: result.poll.questions[0].correctAnswer,
                numberOfQuestions: result.poll.questions.length
            });
        }.bind(this));
    }


    componentWillReceiveProps() {
        console.log('componentWillReceiveProps()');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate()');
        return true;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate()');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
        //this.checkAnswer(this.state.checkedValue);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }

    render(){

        var rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };



        return (
            <div className="container">
                <div className="jumbotron">
                    <PollHeader text={this.state.header} />
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-sm-4 col-sm-offset-4">
                        <form>
                            <PollQuestion text={this.state.question} />
                            <RadioButtonGroup
                                name = 'answer'
                                checkedValue = {this.state.checkedValue}
                                choices = {this.state.choices}
                                onChange = {this.setCheckedValue}
                            />
                            <PollSubmitButton handleClick={this.checkAnswer} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}


export default PollContainer;