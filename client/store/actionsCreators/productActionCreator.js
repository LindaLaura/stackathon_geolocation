import {LOAD_PRODUCT, LOAD_PRODUCTS, EDIT_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT} from '../actions/productAction'



const loadProducts = (products) =>{
    return{
        type: LOAD_PRODUCTS,
        products
    }
};

const loadProduct = (product) =>{
    return{
        type: LOAD_PRODUCT,
        product
    }
}
const createProduct = (product) =>{
    return{
        type: CREATE_PRODUCT,
        product
    }
};

const deleteProduct = (product) =>{
    return{
        type: DELETE_PRODUCT,
        product
    }
}

const editProduct = (product) =>{
    return{
        type: EDIT_PRODUCTS,
        product
    }
}

export { loadProduct, loadProducts, editProduct, createProduct, deleteProduct}