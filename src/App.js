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

    render(){
      return (
        <Router>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/resume" component={ Resume } />
              <Route exact path="/projects" component={ Project } />
              <Route exact path="/projects/:projectId" component={ProjectShow} />
              <Redirect to="/" />
            </Switch>
          </div>
          <Footer />
        </Router>
      );
    }
  }

export default App;
