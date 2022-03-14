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
        let classes = 'navbar-nav text-uppercase py-4 py-lg-0 ';
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

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <nav className={getNavClasses()} id='mainNav'>
            <div className='container'>
                <a className='navbar-brand' href='#root'>
                    Online Store
                </a>
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
                                <Link className='nav-link' to='/shop' onClick={scrollToTop}>
                                    {t('shop')}
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#services'>
                                    {t('services')}
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#about'>
                                    {t('about')}
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#gallery'>
                                    {t('gallery')}
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#team'>
                                    {t('team')}
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#contact'>
                                    {t('contact')}
                                </a>
                            </li>
                            <li className='nav-item dropdown'>
                                <a
                                    className='nav-link'
                                    id='navbarDropdown'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                >
                                    {t('language')}
                                </a>
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
                                <a className=''></a>
                            </li>
                        </ul>
                    ) : (
                        <>
                            <ul className={getUlClasses('reverse')}>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/' onClick={scrollToTop}>
                                        {t('home')}
                                    </Link>
                                </li>
                            </ul>
                            <button class='btn btn-outline-light'>
                                <FaShoppingCart className='mx-1' />
                                {t('cart')}
                                <span class='badge bg-light text-dark mx-1 rounded-pill'>0</span>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default HeaderComponent;
