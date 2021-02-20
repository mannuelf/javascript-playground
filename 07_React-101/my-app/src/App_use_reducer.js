import React, { useState, useEffect } from 'react';
import './App.css';
import photo from './photo.jpeg';

function AdminSection() {
  return <h1>Admin users only</h1>;
}

function PublicSection() {
  return (
    <div className="App">
      <img src={photo} alt="Mannuel Ferreira" />
      <Header name="Mannuel" />
      <Main content="This is a cool website" information={companyObject} />
      <Footer year={new Date().getFullYear()} message="Copyright ©" />
    </div>
  );
}

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

function Main(props) {
  const [emotion, setEmotion] = useState('happy');
  const [secondary, setSecondary] = useState('happy');

  useEffect(() => {
    console.log(`It's ${emotion} here`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} here`);
  }, [secondary]);

  return (
    <main>
      <h2>{props.content}</h2>
      <p>I am {emotion}</p>
      <button onClick={() => setEmotion('excited')}>Set emotion</button>
      <button onClick={() => setSecondary('need coffee')}>need coffee</button>
      <ul>
        {props.information.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
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

const companies = ['Noroff', 'CNN', 'Oslo', 'vg.no'];
const companyObject = companies.map((item, i) => ({ id: i, title: item }));

function App({ authorized }) {
  return <>{authorized ? <AdminSection /> : <PublicSection />}</>;
}

export default App;
