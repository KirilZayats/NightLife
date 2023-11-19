import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { watcherUsers } from './action-creators';
import { usersReduser } from './reducers';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
	yield all([watcherUsers]);
}
const store = createStore(
	combineReducers({
		users: usersReduser,
	}),
	applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export { store };
