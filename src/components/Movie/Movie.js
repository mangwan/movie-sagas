import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

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


class Movie extends Component {

    //when poster is clicked it takes you to the details page
    handleClick = () => {
        console.log('movie poster was clicked');
        this.props.dispatch({ type: 'SET_CURRENT_MOVIE', payload: this.props.movie })
        this.props.history.push(`/details`);
    }

    render() {
        return (
            <div>
                <Paper style={styles.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>{this.props.movie.title}</Grid>
                        <Grid item xs={3}><img data-id={this.props.movie.id} src={this.props.movie.poster} alt="movie poster" onClick={this.handleClick} /></Grid>
                        <Grid item xs={9}>{this.props.movie.description}</Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(withRouter(Movie));

