import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Photos from './components/Photos'
import Blog from './components/Blog'

function App() {
  return (
    <Router>
      <Route exact path = '/' render={() => <Home /> }></Route>
      <Route exact path = '/projects' render={() => <Projects /> }></Route>
      <Route exact path = '/photos' render={() => <Photos /> }></Route>
      <Route exact path = '/blog' render={() => <Blog /> }></Route>
    </Router>
  );
}

export default App;
