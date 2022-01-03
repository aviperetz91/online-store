import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { i18n, t } = useTranslation();

    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            const navbarShrink = () => {
                const navbarCollapsible = document.body.querySelector('#mainNav');
                if (!navbarCollapsible) {
                    return;
                }
                if (window.scrollY === 0) {
                    navbarCollapsible.classList.remove('navbar-shrink');
                } else {
                    navbarCollapsible.classList.add('navbar-shrink');
                }
            };
            navbarShrink();
        });
    });

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const getClasses = () => {
        let classes;
        if (i18n.language === 'he') {
            classes = 'navbar-nav text-uppercase me-auto py-4 py-lg-0';
        } else {
            classes = 'navbar-nav text-uppercase ms-auto py-4 py-lg-0';
        }
        return classes;
    };

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark fixed-top' id='mainNav'>
                <div className='container'>
                    <a className='navbar-brand' href='#page-top'>
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
                            <span class='navbar-toggler-icon'></span>
                        </div>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarResponsive'>
                        <ul className={getClasses()}>
                            <li className='nav-item'>
                                <a className='nav-link' href='#shop'>
                                    {t('shop')}
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
                                <a class='nav-link' href='#team'>
                                    {t('team')}
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#contact'>
                                    {t('contact')}
                                </a>
                            </li>
                            <li class='nav-item dropdown'>
                                <a
                                    class='nav-link'
                                    id='navbarDropdown'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                >
                                    {t('language')}
                                </a>
                                <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
                                    <li>
                                        <button class='dropdown-item' onClick={changeLanguage} value='he'>
                                            עברית
                                        </button>
                                    </li>
                                    <li>
                                        <button class='dropdown-item' onClick={changeLanguage} value='en'>
                                            English
                                        </button>
                                    </li>
                                </ul>
                            </li>
                            <li className=''>
                                <a className=''></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className='masthead'>
                <div className='container'>
                    <div className='masthead-subheading'>{t('welcome')}</div>
                    <div className='masthead-heading text-uppercase'>{t('nice-to-meet')}</div>
                    <a className='btn btn-primary btn-lg text-uppercase' href='#services'>
                        {t('go-to-shop')}
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;
