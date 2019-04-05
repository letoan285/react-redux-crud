import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { createProductApi } from '../../actions/product.actions';

class ProductAdd extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            slug: '',
            description: '',
            code: '',
            price: 0,
            status: 0
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addProduct(this.state);
        setTimeout(() => {
            this.props.history.push('/products');
        }, 100);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label> Name</label>
                        <input type="text" className="form-control" name="name" value={ this.state.name } onChange={ this.handleChange }/>
                    </div>
                    <div className="form-group">
                        <label> Slug</label>
                        <input type="text" className="form-control" name="slug" value={ this.state.slug } onChange={ this.handleChange }/>
                    </div>
                    <div className="form-group">
                        <label> Description</label>
                        <input type="text" className="form-control" name="description" value={ this.state.description } onChange={ this.handleChange }/>
                    </div>
                    <div className="form-group">
                        <label> Code</label>
                        <input type="text" className="form-control" name="code" value={ this.state.code } onChange={ this.handleChange }/>
                    </div>
                    <div className="form-group">
                        <label> Price</label>
                        <input type="text" className="form-control" name="price" value={ this.state.price } onChange={ this.handleChange }/>
                    </div>
                    <div className="form-group">
                        <label> Status</label>
                        <input type="text" className="form-control" name="status" value={ this.state.status } onChange={ this.handleChange }/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-sm btn-success">Create new</button>
                    </div>
                </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd);