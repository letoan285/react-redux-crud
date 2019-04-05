import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { loadProductApi } from '../../actions/product.actions';

class ProductDetail extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getProduct(id);
    }
    render() {
        const {product} = this.props;
        return (
            <div className="product-list">
                <h3>Product detail {product.name}</h3>
                <h4>Product description {product.description}</h4>
                <Link className="btn btn-primary" to={`/products/edit/${product.id}`}>Edit</Link>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        product: state.productReducer.product
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProduct: (id) => {
            dispatch(loadProductApi(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);