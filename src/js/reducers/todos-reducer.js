import Immutable from 'immutable';
import {ADD_TODO, REMOVE_TODO, COMPLETE_TODO} from '../actions/types/action-types';

export default function todos(state = Immutable.List(), action = {}) {
    switch(action.type) {
        case ADD_TODO:
            return state.unshift(Immutable.fromJS({
                id: state.isEmpty() ? 0 : state.get(0).get('id') + 1,
                text: action.text,
                done: false
            }));

        case REMOVE_TODO:
            let removeIndex = state.findIndex((todo) => todo.get('id') === action.id);
            return removeIndex === -1 ? state : state.delete(removeIndex);

        case COMPLETE_TODO:
            let completeIndex = state.findIndex((todo) => todo.get('id') === action.id);
            return completeIndex === -1 ? state : state.update(completeIndex, (todo) => todo.set('done', true));

        default:
            return state;
    }
};