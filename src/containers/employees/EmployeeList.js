import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { loadProductsApi } from '../../actions/product.actions';
import { loadEmployeesApi } from '../../actions/employee.actions';


class EmployeeList extends Component {
    componentDidMount() {
        this.props.getEmployeeList();
    }
    render() {
        const employeeList = this.props.employees.map((employee, index) => {
            return (
                <tr key={index}>
                    <td>{ index+1 }</td>
                    <td><Link to={`/employees/detail/${employee.id}`}> { employee.name } </Link></td>
                    <td>{ employee.phone }</td>
                    <td>{ employee.email }</td>
                    <td>
                        <Link to={`/employees/edit/${employee.id}`}>Edit</Link></td>
                </tr>
            );
        })
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th><Link className="btn btn-sm btn-success" to="/products/add">create new</Link></th>
                    </tr>
                </thead>
                <tbody>
                        { employeeList }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employeeReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getEmployeeList: () => {
            dispatch(loadEmployeesApi())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);