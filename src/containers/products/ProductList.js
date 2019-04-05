import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadProductsApi, deleteProductApi } from '../../actions/product.actions';


class ProductList extends Component {
    componentDidMount() {
        this.props.loadProducts();
    }
    handleDelete = (product) => {
        const cf = window.confirm("are you sure to delete ?")
        if(cf) {
            this.props.removeProduct(product.id);
        }
    }

    render() {
        const productList = this.props.products.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td><Link to={`/products/detail/${product.id}`}> {product.name} </Link></td>
                    <td>{product.price}</td>
                    <td>{product.status}</td>
                    <td>
                        <Link className="btn btn-sm btn-primary mr-2" to={`/products/edit/${product.id}`}>Edit</Link>
                        <button onClick={() => this.handleDelete(product) } className="btn btn-sm btn-danger">Del</button>
                    </td>
                </tr>
            );
        })
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
                    { productList }
                </tbody>
            </table>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.productReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadProducts: () => {
            dispatch(loadProductsApi())
        },
        removeProduct: (id) => {
            dispatch(deleteProductApi(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);