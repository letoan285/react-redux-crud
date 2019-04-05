import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import ProductList from './containers/products/ProductList';
import ProductAdd from './containers/products/ProductAdd';
import ProductDetail from './containers/products/ProductDetail';
import CategoryList from './containers/categories/CategoryList';
import CategoryAdd from './containers/categories/CategoryAdd';
import CategoryDetail from './containers/categories/CategoryDetail';
import CategoryEdit from './containers/categories/CategoryEdit';
import ProductEdit from './containers/products/ProductEdit';
import EmployeeList from './containers/employees/EmployeeList';
import EmployeeAdd from './containers/employees/EmployeeAdd';
import EmployeeDetail from './containers/employees/EmployeeDetail';
import EmployeeEdit from './containers/employees/EmployeeEdit';
import UserList from './containers/users/UserList';
import UserAdd from './containers/users/UserAdd';
import UserDetail from './containers/users/UserDetail';
import UserEdit from './containers/users/UserEdit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <ul>
          <li><Link to="/products">Product List</Link></li>
          <li><Link to="/products/add">Product Add</Link></li>
          <li><Link to="/categories">Category List</Link></li>
          <li><Link to="/categories/add">Category Add</Link></li>
          <li><Link to="/employees">Employees List</Link></li>
          <li><Link to="/employees/add">Employees Add</Link></li>
          <li><Link to="/users">Users List</Link></li>
          <li><Link to="/user/add">Users Add</Link></li>
        </ul>
          <Route path="/" exact component={ProductList}/>
          <Route path="/products" exact component={ProductList}/>
          <Route path="/products/add" component={ProductAdd}/>
          <Route path="/products/detail/:id" component={ProductDetail}/>
          <Route path="/products/edit/:id" component={ProductEdit}/>
          <Route path="/categories" exact component={CategoryList}/>
          <Route path="/categories/add" component={CategoryAdd}/>
          <Route path="/categories/detail/:id" component={CategoryDetail}/>
          <Route path="/categories/edit/:id" component={CategoryEdit}/>
          <Route path="/employees" exact component={EmployeeList}/>
          <Route path="/employees/add" component={EmployeeAdd}/>
          <Route path="/employees/detail/:id" component={EmployeeDetail}/>
          <Route path="/employees/edit/:id" component={EmployeeEdit}/>
          <Route path="/users" exact component={UserList}/>
          <Route path="/users/add" component={UserAdd}/>
          <Route path="/users/detail/:id" component={UserDetail}/>
          <Route path="/users/edit/:id" component={UserEdit}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
