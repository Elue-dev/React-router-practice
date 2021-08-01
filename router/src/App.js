import React from 'react';
import './App.css';
import Content from './components/Content';
import Final from './components/Final';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path ="/" exact component={Home}/>
        <Route path = "/showcase" component={Showcase}/>
        <Route path = "/content" component={Content}/>
        <Route path = "/final" component={Final}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
