import React from 'react';
//import logo from './logo.svg';
import './App.css';
import LeftSidebar from './Sidebar'; 

function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
