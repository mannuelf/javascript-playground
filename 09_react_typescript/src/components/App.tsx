import React from 'react';
import { connect } from 'react-redux';
import { ITodo, fetchTodos } from '../actions';
import { IStoreState } from '../reducers';

interface IAppProps {
  todos: ITodo[];
  fetchTodos(): any;
}

class _App extends React.Component<IAppProps> {
  render() {
    return <div>Hi from APP!</div>;
  }
}

const mapStateToProps = ({ todos }: IStoreState): { todos: ITodo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
