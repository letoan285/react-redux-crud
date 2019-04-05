import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { loadUsersApi } from '../../actions/user.actions';

class UserList extends Component {

    componentDidMount() {
        this.props.getUserList();
    }
    render() {
        const userList = this.props.users.map((user, index) => {
            return (
                <tr key={user.id}>
                    <td>{index+1}</td>
                    <td><Link  to={`/users/detail/${user.id}`}> {user.name} </Link></td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to={`/users/edit/${user.id}`} className="btn btn-sm btn-primary mr-2">Edit</Link>
                        <button className="btn btn-sm btn-danger">Del</button>
                    </td>
                </tr>
            );
        })
        return (
            <div className="user-list">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Actitity</th>
                        </tr>
                    </thead>
                    <tbody>
                        { userList }
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.userReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUserList: () => {
            dispatch(loadUsersApi())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);