import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Wordle from './components/wordle/Wordle'
import Troll from './components/wordle/Troll'
import TrollPic from './components/wordle/TrollPic'


function App() {
    return (
        <Router>
            <Route exact path = '/' render={() => <Home /> }></Route>
            <Route exact path = '/projects/' render={() => <Projects /> }></Route>
            <Route exact path = '/wordle/' render={() => <Wordle /> }></Route>
            <Route exact path = '/troll/' render={() => <Troll /> }></Route>
            <Route exact path = '/trollpic' render={() => <TrollPic /> }></Route>
            <Route path='/zoom/' component={() => {
                window.location.href = 'https://us02web.zoom.us/j/9780978295?pwd=eVh6b1BpQ0F4aS9DbUoyMmdmWkxiZz09';
                return null;
            }}/>
        </Router>
    );
}

export default App;