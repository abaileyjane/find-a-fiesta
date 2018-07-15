import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducers/reducers.js';

export default createStore(Reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
