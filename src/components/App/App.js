import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../Home/Home';
import Details from '../Details/Details';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Movies</h1>
          <Route path="/" exact component={Home} />
          <Route path="/Details" exact component={Details} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
