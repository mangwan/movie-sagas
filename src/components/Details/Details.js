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

  handleClick = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Back to List</button>
        <button>Edit</button>
        <Paper style={styles.paper}>
          <Grid container>
            <Grid item xs={12}>{this.props.reduxState.currentMovie.title}</Grid>
            <Grid item xs={12}>{this.props.reduxState.currentMovie.description}</Grid>
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
