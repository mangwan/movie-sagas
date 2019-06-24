import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from '../Movie/Movie';

class Movies extends Component {
    render() {
        return (
            <div>
                {this.props.reduxState.movies.map((movie) => {
                    return (
                        <Movie key={movie.id} movie={movie}/>
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

