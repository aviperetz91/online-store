import dotenv from 'dotenv';
dotenv.config();

export const API_URL = process.env.REACT_APP_API_URL;

export const PATHS = {
    HOME_SCREEN_PATH: '/',
    SHOP_SCREEN_PATH: '/shop',
    PRODUCT_DETAILS_SCREEN_PATH: '/product/:id',
};

export const FORMS_NAMES = {
    CONTACT_FORM: 'contactForm',
};

export const PRODUCT_PARAMS = {
    ASC_ORDER: 'asc',
    DESC_ORDER: 'desc',
    LIMIT: 4,
};

export const DEFAULT_RADIO = {
    ALL_CATEGORIES: 'ALL_CATEGORIES',
    ALL_PRICES: 'ALL_PRICES',
    ALL_SORTING_OPTIONS: 'ALL_SORTING_OPTIONS',
};
