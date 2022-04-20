import axios from 'axios';
import { API_URL } from '../../config/consts';
import { ADD_ITEM_TO_CART } from '../constants/cartConstants';

export const addToCart = (id) => {
    return async (dispatch, getState) => {
        const { data } = await axios.get(`${API_URL}/api/products/${id}`);
        dispatch({ type: ADD_ITEM_TO_CART, payload: data });
        const cartItems = JSON.stringify(getState().cart.cartItems);
        localStorage.setItem('cartItems', cartItems);
    };
};
