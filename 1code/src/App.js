import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header title="Blog" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
