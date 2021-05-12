import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../client/store/thunks/productThunks';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Allproducts from './components/Allproducts';


class App extends Component {
    constructor(){
        super();
    }

    async componentDidMount(){
         await this.props.loadProducts();
        // console.log(this.props)
    }

    render(){
        return(
            <Router>
                <div>
                    <Route component={Allproducts}/>
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