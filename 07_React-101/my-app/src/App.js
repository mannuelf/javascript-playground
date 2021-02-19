import React from 'react';
import './App.css';

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

function Main(props) {
  return (
    <main>
      <h2>{props.content}</h2>
    </main>
  );
}

function Footer(props) {
  return (
    <footer>
      <h3>
        {props.message} {props.year}
      </h3>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Mannuel" />
      <Main content="This is a cool website" />
      <Footer year={new Date().getFullYear()} message="Copyright ©" />
    </div>
  );
}

export default App;
