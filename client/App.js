import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../client/store/thunks/productThunks'


class App extends Component {
    constructor(){
        super();
    }

    async componentDidMount(){
         await this.props.loadProducts();
        console.log(this.props)
    }

    render(){
        return(<hr />)
    }
}

const mapState = (state) => {
    return state;
  };
  
  const mapDispatch = (dispatch) => {
    return {
      loadProducts: () => dispatch(fetchProducts()),
    //   loadUser: (id) => dispatch(fetchUser(id)),
    };
  };
export default connect(mapState, mapDispatch)(App);