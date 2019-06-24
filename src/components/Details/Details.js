import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui styling
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = {
  card: {
    width: '80%',
    margin: '15px auto',
  },
  paper: {
    width: '90%',
    margin: '15px auto',
    padding: 20,
  }
}

class Details extends Component {

  handleBackClick = () => {
    this.props.history.push('/');
  }

  handleEditClick = () => {
    this.props.history.push('/edit');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleBackClick}>Back to List</button>
        <button onClick={this.handleEditClick}>Edit</button>
        <Paper style={styles.paper}>
          <Grid container>
            <Grid item xs={12}>{this.props.reduxState.currentMovie.title}</Grid>
            <Grid item xs={12}>{this.props.reduxState.currentMovie.description}</Grid>
            <Grid item xs={12}>
              <h2>Genre</h2>
              <ul>
                {this.props.reduxState.genres.map((genre) => {
                  return (
                    <li>{genre.name}</li>
                  )
                })}
              </ul>
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Details);
