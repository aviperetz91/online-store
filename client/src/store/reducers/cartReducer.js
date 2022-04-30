import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    INCREASE_ITEM_AMOUNT,
    DECREASE_ITEM_AMOUNT,
} from '../constants/cartConstants';

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            const newItem = action.payload;
            const found = state.cartItems.find((item) => item._id === newItem._id);
            newItem.amount = found ? found.amount : 1;
            return {
                ...state,
                cartItems: !found ? [...state.cartItems, newItem] : state.cartItems,
            };
        case REMOVE_ITEM_FROM_CART:
            const idToRemove = action.payload;
            const itemToRemove = state.cartItems.find((item) => item._id === idToRemove);
            itemToRemove.amount = 0;
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item._id !== idToRemove),
            };
        case INCREASE_ITEM_AMOUNT:
            const idToIncrease = action.payload;
            const indexToIncrease = state.cartItems.findIndex((item) => item._id === idToIncrease);
            const incCartItems = [...state.cartItems];
            if (incCartItems[indexToIncrease].amount < incCartItems[indexToIncrease].quantity) {
                incCartItems[indexToIncrease].amount++;
            }
            return {
                ...state,
                cartItems: incCartItems,
            };
        case DECREASE_ITEM_AMOUNT:
            const idToDecrease = action.payload;
            const indexToDecrease = state.cartItems.findIndex((item) => item._id === idToDecrease);
            const decCartItems = [...state.cartItems];
            if (decCartItems[indexToDecrease].amount > 1) {
                decCartItems[indexToDecrease].amount--;
            }
            return {
                ...state,
                cartItems: decCartItems,
            };
        default:
            return state;
    }
};

export default cartReducer;
