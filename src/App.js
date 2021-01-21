import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/pageParts/NavBar';
import Footer from './components/pageParts/Footer';
import Home from './containers/Home';
import Project from './containers/Project';
import Resume from './containers/Resume';
import Projectshow from './containers/ProjectShow';
import Projectnew from './containers/ProjectNew';
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
              <Route exact path="/projects/:projectId" component={Projectshow} />
              <Route exact path="/newproject" component={Projectnew} />

            </Switch>
          </div>
          <Footer />
        </Router>
      );
    }
  }

export default App;