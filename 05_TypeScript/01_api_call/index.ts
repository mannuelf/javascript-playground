import axios from 'axios';

const BASE_URL: string = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

(async () => {
  await axios.get(BASE_URL).then((response) => {
    const todo = response.data as Todo;

    const ID = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(ID, title, completed);
  });
})();

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(
    `The todo with ID: ${id} and has as a title of: ${title} and is ${completed}`
  );
};
