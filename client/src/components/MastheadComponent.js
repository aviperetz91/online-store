import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../config/consts';

const MastheadComponent = () => {
    const { t } = useTranslation();

    return (
        <header className='masthead'>
            <div className='container'>
                <div className='masthead-subheading'>{t('welcome')}</div>
                <div className='masthead-heading text-uppercase'>{t('nice-to-meet')}</div>
                <Link className='btn btn-primary btn-xl text-uppercase' to={PATHS.SHOP_SCREEN_PATH}>
                    {t('go-to-shop')}
                </Link>
            </div>
        </header>
    );
};

export default MastheadComponent;
