import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../Home/Home';
import Details from '../Details/Details';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.getMovies();
    this.getGenres();
  }

  getMovies() {
    this.props.dispatch({ type: 'FETCH_MOVIES' })
  }

  getGenres() {
    this.props.dispatch({ type: 'FETCH_GENRES' })
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={Movies} />
          <Route path="/details" exact component={Details} />
          <Route path="/edit" exact component={Edit} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
