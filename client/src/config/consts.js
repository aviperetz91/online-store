import dotenv from 'dotenv';
dotenv.config();

export const API_URL = process.env.REACT_APP_API_URL;

export const PATHS = {
    HOME_SCREEN_PATH: '/',
    SHOP_SCREEN_PATH: '/shop',
};

export const FORMS_NAMES = {
    CONTACT_FORM: 'contactForm',
};
