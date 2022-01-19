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
                        <a className='btn btn-dark btn-social mx-2' href='#'>
                            <FaTwitter />
                        </a>
                        <a className='btn btn-dark btn-social mx-2' href='#'>
                            <FaFacebookF />
                        </a>
                        <a className='btn btn-dark btn-social mx-2' href='#'>
                            <FaInstagram />
                        </a>
                        <a className='btn btn-dark btn-social mx-2' href='#'>
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <div className='col-lg-4 text-lg-center'>
                        <a className='link-dark text-decoration-none mx-3' href='#'>
                            {t('privacy-policy')}
                        </a>
                        <a className='link-dark text-decoration-none' href='#'>
                            {t('terms-of-use')}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
