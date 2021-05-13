import { ITodo, IFetchTodosAction } from '../actions';
import { ActionTypes } from '../actions/types';

// state is array of Todos or init with empty array
export const todosReducer = (
  state: ITodo[] = [],
  action: IFetchTodosAction,
) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
