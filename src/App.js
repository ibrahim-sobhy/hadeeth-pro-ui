import React from 'react';
import './App.scss';
import Nav from './components/navigation/navigation';
import Search from './components/searching/searching';
import { BrowserRouter as Router } from "react-router-dom";
import MainPanel from './components/main/main-panel';

function App() {
  const routing = (
    <Router>
      <div className="app">
        <div className="app__nav">
          <Nav />
        </div>
        <section className="app__main">
          <div className="app__header">
            <Search />
          </div>
          <div className="app__main--panel">
            <MainPanel />
          </div>
        </section>
      </div>
    </Router>
  );
  return routing;
}

export default App;
