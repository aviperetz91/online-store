import { useEffect } from 'react';

const Header = () => {
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

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark fixed-top' id='mainNav'>
                <div className='container'>
                    <a className='navbar-brand' href='#page-top'>
                        <img src='...' alt='...' />
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
                            <span className='mx-1'>MENU</span>
                            <span class='navbar-toggler-icon'></span>
                        </div>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarResponsive'>
                        <ul className='navbar-nav text-uppercase ms-auto py-4 py-lg-0'>
                            <li className='nav-item'>
                                <a className='nav-link' href='#shop'>
                                    Shop
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#about'>
                                    About
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#gallery'>
                                    Gallery
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a class='nav-link' href='#team'>
                                    Team
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#contact'>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className='masthead'>
                <div className='container'>
                    <div className='masthead-subheading'>Welcome To Our Store!</div>
                    <div className='masthead-heading text-uppercase'>It's Nice To Meet You</div>
                    <a className='btn btn-primary btn-xl text-uppercase' href='#services'>
                        Take Me To The Shop
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;
