import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar.js';
import Homepage from './components/homepage.js';
import ResultsPage from './components/resultPage.js'

export class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/monday' component={ResultsPage} />
      </div>
     </Router>
    );
  }
}

const mapStateToProps = state => ({});


export default withRouter(connect(mapStateToProps)(App));
