import {LOAD_PRODUCT, LOAD_PRODUCTS, DELETE_PRODUCT, EDIT_PRODUCT, CREATE_PRODUCT} from '../actions/productAction';

const initialState = {
    products:[],
    selectedProduct:{}
};

const productReducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_PRODUCTS:
            return {...state, products: action.products};
        case LOAD_PRODUCT:
            return {...state, selectedProduct: action.product};
        case CREATE_PRODUCT:
            return {
                ...state,
                product: [...state.products, action.products],
                selectedProduct: action.product
            };
        case EDIT_PRODUCT:
            const theProducts = state.products.filter((product) => product.id !== state.product.id) 
            return {...state, 
                products:[...theProducts, action.product],
            }
        case DELETE_PRODUCT:
            const leftoverProducts = state.products.filter((product) => {
                    product.id !== action.product.id
                })
            return {...state, products: leftoverProducts};
        default: 
            return state
    }
}

export default productReducer;