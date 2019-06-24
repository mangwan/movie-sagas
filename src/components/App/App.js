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
  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    this.props.dispatch({ type: 'FETCH_MOVIES' })
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={Movies} />
          <Route path="/details" exact component={Details} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
