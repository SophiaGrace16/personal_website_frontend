import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/pages/Home';
import Link from './containers/pages/Link';
import Project from './containers/pages/Project';
import Resume from './containers/pages/Resume';
import './App.css';

class App extends Component {

  constructor() {

    super();
    }

    render(){
      return (
        <Router>
        <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/links" component={ Link } />
              <Route exact path="/resume" component={ Resume } />
              <Route exact path="/projects" component={ Project } />
              <Route exact path="/pets/:id" render={ props => <PetShow {...props} pets={ this.state.pets } />} />
            </Switch>
          </div>
        </Router>
      );
    }
  }

export default App;
