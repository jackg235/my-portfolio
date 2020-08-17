import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
  return (
    <Router>
      <Route exact path = '/' render={() => <Home /> }></Route>
      <Route exact path = '/projects' render={() => <Projects /> }></Route>
    </Router>
  );
}

export default App;
