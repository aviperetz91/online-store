import { ADD_ITEM_TO_CART } from '../constants/cartConstants';

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            const newItem = action.payload;
            const isExist = state.cartItems.some((item) => item._id === newItem._id);
            if (isExist) {
                return { ...state };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, newItem],
                };
            }
        default:
            return state;
    }
};

export default cartReducer;
