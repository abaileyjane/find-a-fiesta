import React, { Component } from 'react';
import { withRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar.js'
import Homepage from './components/homepage.js'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Homepage />
      </div>
    );
  }
}

const mapStateToProps = state => ({});


export default withRouter(connect(mapStateToProps)(App));
