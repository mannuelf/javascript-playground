import React, { useState, useEffect } from 'react';
import './App.css';

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.avatar_url} alt={data.name} />
    </div>
  );
}

export default App;

/* https://api.github.com/users/mannuelf 
  takes in current state and returns a new state.
  takes in two args
  1st function
  2nd the initial state
*/
