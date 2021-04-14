import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
    return (
        <Router>
            <Route exact path = '/' render={() => <Home /> }></Route>
            <Route exact path = '/projects' render={() => <Projects /> }></Route>
            <Route path='/zoom' component={() => {
                window.location.href = 'https://us02web.zoom.us/j/9780978295?pwd=eVh6b1BpQ0F4aS9DbUoyMmdmWkxiZz09';
                return null;
            }}/>
        </Router>
    );
}

export default App;