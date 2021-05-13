import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

interface IFetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: ITodo[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';

// async action creator, must use redux thunk
export const fetchTodos = () => {
  // provide a type annotation for dispatch, look at the TypeDef file.
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ITodo[]>(url);

    dispatch<IFetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
