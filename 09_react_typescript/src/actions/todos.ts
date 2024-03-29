import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IFetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: ITodo[];
}

// model the structure an action should have
export interface IDeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

// async action creator, must use redux thunk
export const fetchTodos = () => {
  // provide a type annotation for dispatch, look at the TypeDef file.
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ITodo[]>(url);

    // generic to ensure action obj has correct types
    dispatch<IFetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): IDeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
