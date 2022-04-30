import axios from 'axios';
import { API_URL } from '../../config/consts';
import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    INCREASE_ITEM_AMOUNT,
    DECREASE_ITEM_AMOUNT,
} from '../constants/cartConstants';

export const addToCart = (_id) => {
    return async (dispatch, getState) => {
        const { data } = await axios.get(`${API_URL}/api/products/${_id}`);
        dispatch({ type: ADD_ITEM_TO_CART, payload: data });
        const cartItems = JSON.stringify(getState().cart.cartItems);
        localStorage.setItem('cartItems', cartItems);
    };
};

export const increaseItemAmount = (_id) => {
    return async (dispatch, getState) => {
        dispatch({ type: INCREASE_ITEM_AMOUNT, payload: _id });
        const cartItems = JSON.stringify(getState().cart.cartItems);
        localStorage.setItem('cartItems', cartItems);
    };
};

export const removeFromCart = (_id) => {
    return async (dispatch, getState) => {
        dispatch({ type: REMOVE_ITEM_FROM_CART, payload: _id });
        const cartItems = JSON.stringify(getState().cart.cartItems);
        localStorage.setItem('cartItems', cartItems);
    };
};

export const decreaseItemAmount = (_id) => {
    return async (dispatch, getState) => {
        dispatch({ type: DECREASE_ITEM_AMOUNT, payload: _id });
        const cartItems = JSON.stringify(getState().cart.cartItems);
        localStorage.setItem('cartItems', cartItems);
    };
};
