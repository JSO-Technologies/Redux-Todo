import { combineReducers, createStore } from 'redux';
import todos from '../reducers/todos-reducer';
import filter from '../reducers/filter-reducer';

const todoReducers = combineReducers({todos, filter});
export default createStore(todoReducers);
