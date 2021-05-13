import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { ITodo } from '../actions';

// acts as documentation as well
export interface IStoreState {
  todos: ITodo[];
}

// IStoreState ensure that todosReducer() returns a value of type array of todos
export const reducers = combineReducers<IStoreState>({
  todos: todosReducer,
});
