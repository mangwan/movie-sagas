import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {
    render() {
        return (
            <div>
                <h1>Movies</h1>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Header);
