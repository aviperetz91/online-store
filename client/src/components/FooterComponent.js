import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterComponent = () => {
    const { t } = useTranslation();

    return (
        <footer className='footer py-4'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-4 text-lg-center'>Copyright &copy; Avi Peretz</div>
                    <div className='col-lg-4 my-3 my-lg-0'>
                        <a className='btn btn-dark btn-social mx-2' href='https://twitter.com/'>
                            <FaTwitter />
                        </a>
                        <a className='btn btn-dark btn-social mx-2' href='https://he-il.facebook.com/'>
                            <FaFacebookF />
                        </a>
                        <a className='btn btn-dark btn-social mx-2' href='https://www.instagram.com/'>
                            <FaInstagram />
                        </a>
                        <a className='btn btn-dark btn-social mx-2' href='https://www.linkedin.com/'>
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <div className='col-lg-4 text-lg-center'>
                        <a className='link-dark text-decoration-none mx-3' href='https://www.google.co.il/?hl=iw'>
                            {t('privacy-policy')}
                        </a>
                        <a className='link-dark text-decoration-none' href='https://www.google.co.il/?hl=iw'>
                            {t('terms-of-use')}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
