export function questions(state = [], action) {
    switch (action.type) {
        case 'RECEIVE_QUESTIONS':
            return state
                .slice(0,action.index)
                .concat([action.value])
                .concat(state.slice(action.index+1));
        default:
            return state;
    }
}

export default questions;