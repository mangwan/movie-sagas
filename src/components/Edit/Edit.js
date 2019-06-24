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

class Edit extends Component {
    state = {
        movie: this.props.reduxState.currentMovie,
    }

    //cancel button returns to the details page
    handleCancelButton = () => {
        this.props.history.push('/details');
    }

    //dispatch the PUT route, then returns to the details page
    handleSaveButton = () => {
        this.props.dispatch({ type: 'UPDATE_CURRENT_MOVIE', payload: this.state.movie })
        this.props.history.push('/details');
    }

    //grab the values in the input and textarea and store to the local state
    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            movie: {
                ...this.state.movie,
                [propertyName]: event.target.value,
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleCancelButton}>Cancel</button>
                <button onClick={this.handleSaveButton}>Save</button>
                <br />
                <br />
                <Paper style={styles.paper}>
                    <Grid container>
                        <Grid item xs={12}>
                            <input
                                placeholder="Title"
                                value={this.state.movie.title}
                                onChange={this.handleChangeFor('title')}>
                            </input></Grid>
                        <br />
                        <br />
                        <Grid item xs={12}>
                            <textarea
                                placeholder="Description"
                                type="text"
                                rows="10" cols="75"
                                onChange={this.handleChangeFor('title')}>
                            </textarea></Grid>
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

export default connect(mapReduxStateToProps)(Edit);

