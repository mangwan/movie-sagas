import React, { Component } from 'react';
import { connect } from 'react-redux';

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
  

class Movies extends Component {

    handleClick = () => {
        console.log('movie poster was clicked');
        this.props.history.push('/details');
    }

    render() {
        return (
            <div>
                {this.props.reduxState.movies.map((movie) => {
                    return (
                        <div key={movie.id} movie={movie}>
                            <Paper style={styles.paper}>
                            <Grid container spacing={3}>  
                            <Grid item xs={12}>{movie.title}</Grid>            
                            <Grid item xs={3}><img src={movie.poster} alt="movie poster" onClick={this.handleClick}/></Grid>
                            <Grid item xs={9}>{movie.description}</Grid>
                            </Grid> 
                            </Paper>
                        </div>
                    );
                })}
              
           
            </div>

        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Movies);

