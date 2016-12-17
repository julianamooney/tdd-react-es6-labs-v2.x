export function selectAnswer(index,value){
    return {
        type: 'SELECT_ANSWER',
        index,
        value
    };
}

export function checkAnswers(index,value){
    return {
        type: 'CHECK_ANSWERS',
        index,
        value
    };
}