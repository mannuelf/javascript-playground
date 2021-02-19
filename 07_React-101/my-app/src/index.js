import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// takes 2 args, the component we want
// to render and the ID of the HTML element where we want to put it.
/*ReactDOM.render(
  React.createElement('h1', { style: { color: 'pink' } }, 'Hello from react'),
  document.getElementById('root')
);*/

// this will work but now too much nesting and typing error prone.
// lets use JSX now. JavaScript as XML, lets you write HTML in JS
/*ReactDOM.render(
  React.createElement(
    'ul',
    null,
    React.createElement('li', null, 'Buy Milk'),
    React.createElement('li', null, 'Buy Bread'),
    React.createElement('li', null, 'Buy Sugar')
  ),
  document.getElementById('root')
);*/

// load in Babel
/*ReactDOM.render(
  <ul>
    <li>milk</li>
    <li>bread</li>
    <li>sugar</li>
  </ul>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
