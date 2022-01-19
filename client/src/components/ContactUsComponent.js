import { useTranslation } from 'react-i18next';

const ContactUsComponent = () => {
    const { t } = useTranslation();

    return (
        <section className='page-section' id='contact'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='section-heading text-uppercase'>{t('contact-us')}</h2>
                    <h3 className='section-subheading text-muted'>{t('feedback-from-you')}</h3>
                </div>
                <form id='contactForm' data-sb-form-api-token='API_TOKEN'>
                    <div className='row align-items-stretch mb-5'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <input className='form-control' id='name' type='text' placeholder={t('your-name')} />
                                <div className='invalid-feedback'>{t('name-required')}</div>
                            </div>
                            <div className='form-group'>
                                <input className='form-control' id='email' type='email' placeholder={t('your-email')} />
                                <div className='invalid-feedback'>{t('email-required')}</div>
                                <div className='invalid-feedback'>{t('email-not-valid')}</div>
                            </div>
                            <div className='form-group mb-md-0'>
                                <input className='form-control' id='phone' type='tel' placeholder={t('your-phone')} />
                                <div className='invalid-feedback'>{t('phone-required')}</div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group form-group-textarea mb-md-0'>
                                <textarea
                                    className='form-control'
                                    id='message'
                                    placeholder={t('your-message')}
                                ></textarea>
                                <div className='invalid-feedback'>{t('message-required')}</div>
                            </div>
                        </div>
                    </div>
                    <div className='d-none' id='submitErrorMessage'>
                        <div className='text-center text-danger mb-3'>{t('error-sending-message')}</div>
                    </div>
                    <div className='text-center'>
                        <button
                            className='btn btn-primary btn-xl text-uppercase disabled'
                            id='submitButton'
                            type='submit'
                        >
                            {t('send-message')}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUsComponent;
