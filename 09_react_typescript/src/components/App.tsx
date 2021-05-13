import React from 'react';
import { connect } from 'react-redux';
import { ITodo, fetchTodos } from '../actions';
import { IStoreState } from '../reducers';

interface IAppProps {
  todos: ITodo[];
  fetchTodos(): any;
}

class _App extends React.Component<IAppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: ITodo) => {
      return <div key={todo.id}>{todo.title}</div>;
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

export const App = connect(mapStateToProps, { fetchTodos })(_App);
