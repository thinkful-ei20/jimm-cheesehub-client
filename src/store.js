import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import cheeseReducer from './reducers/cheeseReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	cheeseReducer,
	composeEnhancers(
		applyMiddleware(thunk),
	)
);

export default store;