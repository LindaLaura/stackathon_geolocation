import axios from "axios";
import {
  loadProducts,
  loadProduct,
  createProduct,
  editProduct,
  deleteProduct,
} from '../actionsCreators/productActionCreator';

const fetchProducts = () => {
    return async (dispatch) => {
      const { data: products } = await axios.get("/api/products");
      dispatch(loadProducts(products));
    };
};

const fetchProduct = (productId) => {
    return async (dispatch) => {
      const { data: product } = await axios.get(`/api/products/${productId}`);
      dispatch(loadProduct(product));
    };
};

const addProduct = (newProduct, history) => {
    return async (dispatch) => {
    //   const headerToken = {
    //     headers: { authorization: window.localStorage.getItem("token") },
    //   }; per la sicurezza della api
      const { data: product } = await axios.post(
        `/api/products/`,
        newProduct,
      );
      dispatch(createProduct(product));
      history.push(`/products/${product.id}`);
    };
};

const destroyProduct = (product) => {
    return async (dispatch) => {
      await axios.delete(`/api/products/${product.id}`);
      dispatch(deleteProduct(product));
    };
};

const updateProduct = (product, history) => {
    return async (dispatch) => {
      const { data: updatedProduct } = await axios.put(
        `/api/products/${product.id}`,
        product
      );
      dispatch(editProduct(updatedProduct));
      history.push(`/products/${updatedProduct.id}`);
    };
};

export{fetchProducts, fetchProduct, updateProduct, destroyProduct, addProduct}