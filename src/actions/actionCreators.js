import * as axios from 'axios';

export function selectAnswer(index, value) {
    return {
        type: 'SELECT_ANSWER',
        index,
        value
    };
}


export function fetchQuestion() {
    const { dispatch,questionID } = this.props;
    dispatch({type: 'RECEIVE_QUESTION',payload: questionID});
}
