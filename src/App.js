import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar.js'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

const mapStateToProps = state => ({});


export default withRouter(connect(mapStateToProps)(App);
