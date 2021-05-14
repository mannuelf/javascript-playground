import React from 'react';
import { connect } from 'react-redux';
import { ITodo, fetchTodos, deleteTodo } from '../actions';
import { IStoreState } from '../reducers';

interface IAppProps {
  todos: ITodo[];
  fetchTodos: typeof fetchTodos;
  deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<IAppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
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
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: IStoreState): { todos: ITodo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
