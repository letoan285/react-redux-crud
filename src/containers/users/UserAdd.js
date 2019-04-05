import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class UserAdd extends Component {

    render() {
        return (
            <div className="user-list">
                <h3>user detail user</h3>
                <h4>user description </h4>
                <Link className="btn btn-primary" to={`/users/edit`}>Edit</Link>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAdd);