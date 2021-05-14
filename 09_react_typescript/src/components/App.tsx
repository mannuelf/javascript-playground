import React from 'react';
import { connect } from 'react-redux';
import { ITodo, fetchTodos, deleteTodo } from '../actions';
import { IStoreState } from '../reducers';

interface IAppProps {
  todos: ITodo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface IAppState {
  fetching: boolean;
}

class _App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: IAppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: ITodo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? 'loading...' : ''}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: IStoreState): { todos: ITodo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
