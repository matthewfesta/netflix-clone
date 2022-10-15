import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './requests.js';

function App() {
  return (
    <div className="App">
      <h1>Building Netflix Clone Front End</h1>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
    </div>
  );
}

export default App;
