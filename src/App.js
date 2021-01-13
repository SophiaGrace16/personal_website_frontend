import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './containers/Home';
import Project from './containers/Project';
import Resume from './containers/Resume';
import ProjectShow from './containers/ProjectShow';
import './App.css';

class App extends Component {

  // constructor() {

  //   super();
  //   }

    render(){
      return (
        <Router>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/resume" component={ Resume } />
              <Route exact path="/projects" component={ Project } />
              <Route exact path="/projects/:id" render={ props => <ProjectShow {...props} projects={ this.state.projects } />} />
            </Switch>
          </div>
          <Footer />
        </Router>
      );
    }
  }

export default App;
