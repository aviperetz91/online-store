import { useTranslation } from 'react-i18next';

const MastheadComponent = () => {
    const { t } = useTranslation();

    return (
        <header className='masthead'>
            <div className='container'>
                <div className='masthead-subheading'>{t('welcome')}</div>
                <div className='masthead-heading text-uppercase'>{t('nice-to-meet')}</div>
                <a className='btn btn-primary btn-xl text-uppercase'>{t('go-to-shop')}</a>
            </div>
        </header>
    );
};

export default MastheadComponent;
