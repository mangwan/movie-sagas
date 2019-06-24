import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../Home/Home';
import Details from '../Details/Details';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Movies />
          <Route path="/" exact component={Home} />
          <Route path="/details" exact component={Details} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
