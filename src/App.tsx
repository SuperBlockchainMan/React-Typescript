import React from 'react';
import { Navigate, Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import GlobalStyle from 'style/Global'
import TopBar from 'layouts/TopBar'
import Footer from 'layouts/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <TopBar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
      </div>
      <Footer />
    </>
  );
}

export default App;
