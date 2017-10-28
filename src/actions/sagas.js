import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as axios from 'axios';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchQuestion(action) {
    try {
        const question = yield call(axios.get('data/data.json'),action.payload.QuestionId);
        yield put({type: 'QUESTION_FETCH_SUCCEEDED', question: question});
    } catch (e) {
        yield put({type: 'QUESTION_FETCH_FAILED', message: e.message});
    }
}

/*
  Starts fetchQuestion on each dispatched `QUESTION_FETCH_REQUESTED` action.
  Allows concurrent fetches of question.

function* mySaga() {
    yield takeEvery("QUESTION_FETCH_REQUESTED", fetchQuestion);
}
*/

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of question. If "QUESTion_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
    yield takeLatest('QUESTION_FETCH_REQUESTED', fetchQuestion);
}

export default mySaga;