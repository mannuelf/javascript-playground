import axios from 'axios';
import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/todos';

// async action creator, must use redux thunk
export const fetchTodos = () => {
  // provide a type annotation for dispatch, look at the TypeDef file.
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);

    dispatch({
      type: 'FETCH_TODOS',
      payload: response.data,
    });
  };
};
