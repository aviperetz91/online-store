import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { PATHS } from '../config/consts';
import { FaShoppingCart } from 'react-icons/fa';

const HeaderComponent = () => {
    const { i18n, t } = useTranslation();
    const lang = i18n.language;
    const location = useLocation();
    const isHomeScreen = location.pathname === PATHS.HOME_SCREEN_PATH;

    useEffect(() => {
        listenToScrollEvent();
    });

    const listenToScrollEvent = () => {
        window.addEventListener('scroll', navbarShrink);
    };

    const navbarShrink = () => {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0 && isHomeScreen) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    const getNavClasses = () => {
        let classes = 'navbar navbar-expand-lg navbar-dark ';
        if (isHomeScreen) {
            classes += 'fixed-top';
        } else {
            classes += 'sticky-top navbar-shrink';
        }
        return classes;
    };

    const getUlClasses = (reverse) => {
        let classes = 'navbar-nav text-uppercase py-4 py-lg-0 px-0 ';
        if (reverse) {
            if (lang === 'he') {
                classes += 'ms-auto';
            } else {
                classes += 'me-auto';
            }
        } else {
            if (lang === 'he') {
                classes += 'me-auto';
            } else {
                classes += 'ms-auto';
            }
        }
        return classes;
    };

    const getBrandClasses = () => {
        let classes = 'navbar-brand pointer ';
        if (isHomeScreen) {
            classes += 'mx-0';
        } else {
            if (lang === 'he') {
                classes += 'me-0 ms-3';
            }
        }
        return classes;
    };

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const insidePageNavigation = (section) => {
        const element = document.querySelector(section);
        if (element) {
            element.scrollIntoView();
        }
    };

    return (
        <nav className={getNavClasses()} id='mainNav'>
            <div className='container'>
                <div className={getBrandClasses()} onClick={() => insidePageNavigation('#root')}>
                    Online Store
                </div>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarResponsive'
                    aria-controls='navbarResponsive'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <div className='d-flex justify-content-center align-items-center'>
                        <span className='mx-1'>{t('menu')}</span>
                        <span className='navbar-toggler-icon'></span>
                    </div>
                </button>
                <div className='collapse navbar-collapse' id='navbarResponsive'>
                    {isHomeScreen ? (
                        <ul className={getUlClasses()}>
                            <li className='nav-item'>
                                <div className='nav-link pointer' onClick={() => insidePageNavigation('#services')}>
                                    {t('services')}
                                </div>
                            </li>
                            <li className='nav-item'>
                                <div className='nav-link pointer' onClick={() => insidePageNavigation('#about')}>
                                    {t('about')}
                                </div>
                            </li>
                            <li className='nav-item'>
                                <div className='nav-link pointer' onClick={() => insidePageNavigation('#gallery')}>
                                    {t('gallery')}
                                </div>
                            </li>
                            <li className='nav-item'>
                                <div className='nav-link pointer'>{t('team')}</div>
                            </li>
                            <li className='nav-item'>
                                <div className='nav-link pointer' onClick={() => insidePageNavigation('#contact')}>
                                    {t('contact')}
                                </div>
                            </li>
                            <li className='nav-item dropdown'>
                                <div
                                    className='nav-link pointer'
                                    id='navbarDropdown'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                >
                                    {t('language')}
                                </div>
                                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                    <li>
                                        <button className='dropdown-item' onClick={changeLanguage} value='he'>
                                            עברית
                                        </button>
                                    </li>
                                    <li>
                                        <button className='dropdown-item' onClick={changeLanguage} value='en'>
                                            English
                                        </button>
                                    </li>
                                </ul>
                            </li>
                            <li className=''>
                                <div className=''></div>
                            </li>
                        </ul>
                    ) : (
                        <>
                            <ul className={getUlClasses('reverse')}>
                                <li className='nav-item'>
                                    <Link
                                        className='nav-link pointer'
                                        to='/'
                                        onClick={() => insidePageNavigation('#root')}
                                    >
                                        {t('home')}
                                    </Link>
                                </li>
                            </ul>
                            <button className='btn btn-outline-light'>
                                <FaShoppingCart className='mx-1' />
                                {t('cart')}
                                <span className='badge bg-light text-dark mx-1 rounded-pill'>0</span>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default HeaderComponent;
