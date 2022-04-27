import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../constants/cartConstants';

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            const newItem = action.payload;
            const isExist = state.cartItems.some((item) => item._id === newItem._id);
            return {
                ...state,
                cartItems: !isExist ? [...state.cartItems, newItem] : state.cartItems,
            };
        case REMOVE_ITEM_FROM_CART:
            const idToRemove = action.payload;
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item._id !== idToRemove),
            };
        default:
            return state;
    }
};

export default cartReducer;
