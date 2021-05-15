import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../client/store/thunks/productThunks';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Allproducts from './components/Allproducts';
import CreateTicket from './components/CreateTicket';
import SingleProduct from './components/SingleProduct';


class App extends Component {
    constructor(){
        super();
    }

    async componentDidMount(){
         await this.props.loadProducts();
         //console.log(this.props)
    }

    render(){
        return(
            <Router>
                <div>
                    <Route component={Allproducts} path='/' exact/>
                    <Route component={CreateTicket}  path='/createTicket/:id' exact/>
                    <Route component={SingleProduct}  path='/singleProduct' exact/>
                </div>
            </Router>
        )
    }
}

const mapState = (state) => {
    return state;
  };
  
  const mapDispatch = (dispatch) => {
    return {
      loadProducts: () => dispatch(fetchProducts()),
    };
  };
export default connect(mapState, mapDispatch)(App);