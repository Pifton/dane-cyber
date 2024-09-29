import React from 'react';
//import logo from './logo.svg';
import './App.css';
import LeftSidebar from './Sidebar'; 
import Topbar from './Topbar';
import Device from './Device';

function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <Topbar />
      <Device />
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
