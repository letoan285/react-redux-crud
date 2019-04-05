import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCategoriesApi } from '../../actions/category.actions';


class CategoryList extends Component {
    componentDidMount() {
        this.props.getCategoryList();
    }
    render() {
        const categoryList = this.props.categories.map((category, index) => {
            return (
                <tr key={category.id}>
                    <td> {index+1} </td>
                    <td> {category.name} </td>
                    <td> {category.description} </td>
                    <td> {category.status} </td>
                    <td>
                        <Link className="btn btn-sm btn-primary mr-2" to=''>Edit</Link>
                        <button className="btn btn-sm btn-danger">Del</button>
                    </td>
                </tr>
            );
        })
  
        return (
            <div className="category-list">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        { categoryList }
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        categories: state.categoryReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCategoryList: () => {
            dispatch(loadCategoriesApi())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);