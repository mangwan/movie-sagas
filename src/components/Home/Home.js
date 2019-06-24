import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        {/* <pre>{JSON.stringify(this.props.reduxState.movies)}</pre> */}
      </div>
    )
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Home);
