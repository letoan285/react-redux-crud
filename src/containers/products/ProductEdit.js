import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProductApi } from '../../actions/product.actions';

class ProductEdit extends Component {
    
    render() {
        return (
            <div>
                edit
                {/* <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-sm btn-success">Create new</button>
                    </div>
                </form> */}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (product) => {
            dispatch(createProductApi(product))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);