import {call, put} from 'redux-saga/effects';

import {takeLatest} from 'redux-saga'
import {requestLinkSucceeded, requestLinkFailed} from './actions'
import {REQUEST_LINKS, START_ADD} from './constants'
import {push} from 'react-router-redux'


function fetchLinksFromServer(topicName) {
    return fetch(`http://localhost:3000/api/topics/${topicName}/links`).then(
        response => response.json());
}

function* fetchLinks(action) {
    try {
        const links = yield call(fetchLinksFromServer, action.topicName);
        yield put(requestLinkSucceeded(links));
        //dispatch action to store links
        console.log("LINKS FROM SERVER!!", links);

    } catch (e) {
        //DISPATCH ACTION TO STORE ERROR
        yield put(requestLinkFailed(e.message));

    }
}

function* startAdd(action){
    yield put(push(`/topics/${action.topicName}/add`))
}

export function* startAddSaga(){
    yield* takeLatest(START_ADD, startAdd)
}


// Individual exports for testing
export function* defaultSaga() {
    yield* takeLatest(REQUEST_LINKS, fetchLinks)
}

// All sagas to be loaded
export default [
    defaultSaga,
    startAddSaga
];
