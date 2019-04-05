import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { loadUserApi } from '../../actions/user.actions';

class UserDetail extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getUser(id);
    }
    render() {
        const {user} = this.props;
        return (
            <div className="user-list">
                <h3>user name: {user.name}</h3>
                <h4>Email: { user.email} </h4>
                <Link className="btn btn-primary" to={`/users/edit/${user.id}`}>Edit</Link>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (id) => {
            dispatch(loadUserApi(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);