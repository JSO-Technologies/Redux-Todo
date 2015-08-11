import store from './store/todo-store';

import addTodo from './actions/action-add-todo';
import removeTodo from './actions/action-remove-todo';
import completeTodo from './actions/action-complete-todo';
import changeFilter from './actions/action-change-filter';

import { ACTIVE } from './actions/types/filter-types';


console.log(store.getState());

let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('Task 1'));
store.dispatch(addTodo('Task 2'));
store.dispatch(addTodo('Task 3'));

store.dispatch(completeTodo(2));
store.dispatch(completeTodo(1));

store.dispatch(removeTodo(1));

store.dispatch(changeFilter(ACTIVE));

unsubscribe();