import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects'; 

//Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_GENRES', fetchMovieGenres);
    yield takeEvery('UPDATE_CURRENT_MOVIE', updateCurrentMovie);

}

//update database with changes in movie title and description
function* updateCurrentMovie(action) {
    try {
        const moviesResponse = yield axios.put('/api/movies', action.payload);
        console.log('movie response', moviesResponse);
        yield put({type: 'SET_MOVIES', payload: moviesResponse.data});
    } catch(error) {
        console.log('error fetching movies', error);
    }
}

//grab list of movies from database
function* fetchMovies(action) {
    try {
        const moviesResponse = yield axios.get('/api/movies');
        console.log('movie response', moviesResponse);
        yield put({type: 'SET_MOVIES', payload: moviesResponse.data});
    } catch(error) {
        console.log('error fetching movies', error);
    }
}

//grab movie genres from the databse
function* fetchMovieGenres(action) {
    try {
        const genresResponse = yield axios.get(`/api/movie_genres/${action.movie_id}`);
        console.log('genres response', genresResponse);
        yield put({type: 'SET_TAGS', payload: genresResponse.data});
    } catch(error) {
        console.log('error fetching movies', error);
    }
}



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store a movie returned from the server
const currentMovie = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        currentMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
