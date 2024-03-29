import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    form: formReducer,
});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(reduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

export default store;
