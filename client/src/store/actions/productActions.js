import axios from 'axios';
import { API_URL } from '../../config/consts';
import { GET_PRODUCT_LIST, GET_PRODUCT_LIST_SUCCESS, GET_PRODUCT_LIST_FAIL } from '../constants/productsConstants';

export const getProducts = (sortBy, order, limit) => {
    const sortByValue = sortBy ? sortBy : '';
    const orderValue = order ? order : '';
    const limitValue = limit ? limit : '';
    return async (dispatch) => {
        try {
            dispatch({ type: GET_PRODUCT_LIST });
            const { data } = await axios.get(
                `${API_URL}/api/products?sortBy=${sortByValue}&order=${orderValue}&limit=${limitValue}`
            );
            dispatch({ type: GET_PRODUCT_LIST_SUCCESS, payload: data, productsBy: sortByValue });
        } catch (error) {
            let message = error.message;
            if (error.response && error.response.data.message) {
                message = error.response.data.message;
            }
            dispatch({ type: GET_PRODUCT_LIST_FAIL, payload: message });
        }
    };
};
