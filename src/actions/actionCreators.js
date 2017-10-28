import * as axios from 'axios';

export function selectAnswer(index, value) {
    return {
        type: 'SELECT_ANSWER',
        index,
        value
    };
}

export function receiveQuestions(data) {
    console.log(data);
    return {
        type: 'RECEIVE_QUESTIONS',
        questions: data.poll.questions,
    };
}

export function fetchQuestions() {
    return dispatch => {
        axios.get('/data/data.json')
            .then(response => {
                const data = response.json();
                dispatch(receiveQuestions(data));
            })
            .catch(error => dispatch({
                type: 'FETCH_FAILED', error
            }
            )
            );
    };
}
