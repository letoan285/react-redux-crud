import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { loadProductsApi } from '../../actions/product.actions';


class EmployeeEdit extends Component {
    render() {

        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th><Link className="btn btn-sm btn-success" to="/products/add">create new</Link></th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        );
    }
}

export default EmployeeEdit;