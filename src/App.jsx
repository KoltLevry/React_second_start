import React, { useEffect, useState } from 'react';
import { fetchPersonData } from './components/ProfileCard/fetchData';
import ProfileCard from './components/ProfileCard/ProfileCard';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPersonData().then((results) => setData(results));
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Person Data</h1>
      </header>
      <main className="main">
        {data.map((person, index) => (
          <div key={index} className="card-container">
            <ProfileCard data={person} />
          </div>
        ))}
      </main>
      <footer className="footer">
        <p>© 2025 My site</p>
      </footer>
    </div>
  );
}

export default App;
