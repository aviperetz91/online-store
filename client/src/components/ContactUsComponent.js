import { useTranslation } from 'react-i18next';
import { Field, reduxForm } from 'redux-form';
import { FORMS_NAMES } from '../config/consts';
import validator from 'validator';

const submitHandler = async (values) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    return sleep(1000).then(() => {
        window.alert(`Your data:\n\n${JSON.stringify(values, null, 2)}`);
    });
};

const validate = (values) => {
    const { name, email, phone, message } = values;
    const errors = {};
    if (!name) {
        errors.name = 'required-field';
    }
    if (!email) {
        errors.email = 'required-field';
    } else if (!validator.isEmail(email)) {
        errors.email = 'invalid-email-address';
    }
    if (!phone) {
        errors.phone = 'required-field';
    } else if (!validator.isMobilePhone(phone)) {
        errors.phone = 'invalid-phone-number';
    }
    if (!message) {
        errors.message = 'required-field';
    } else if (message.length < 10) {
        errors.message = 'invalid-message';
    }
    return errors;
};

const Input = ({ input, placeholder, type, meta: { touched, error } }) => {
    const { t } = useTranslation();
    return (
        <div className='form-group mb-md-0'>
            <input {...input} className='form-control' placeholder={placeholder} type={type} />
            {touched && error && <div className='invalid-input'>{t(error)}</div>}
        </div>
    );
};

const TextArea = ({ input, placeholder, meta: { touched, error } }) => {
    const { t } = useTranslation();
    return (
        <div className='form-group form-group-textarea mb-md-0'>
            <textarea {...input} className='form-control' placeholder={placeholder}></textarea>
            {touched && error && <div className='invalid-input'>{t(error)}</div>}
        </div>
    );
};

const ContactUsComponent = (props) => {
    const { t } = useTranslation();
    const { handleSubmit, submitting } = props;

    return (
        <section className='page-section' id='contact'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='section-heading text-uppercase'>{t('contact-us')}</h2>
                    <h3 className='section-subheading text-muted'>{t('feedback-from-you')}</h3>
                </div>
                <form id='contactForm' onSubmit={handleSubmit(submitHandler)}>
                    <div className='row align-items-stretch mb-5'>
                        <div className='col-md-6'>
                            <Field name='name' type='text' component={Input} placeholder={t('your-name')} />;
                            <Field name='email' type='email' component={Input} placeholder={t('your-email')} />;
                            <Field name='phone' type='tel' component={Input} placeholder={t('your-phone')} />
                        </div>
                        <div className='col-md-6'>
                            <Field name='message' component={TextArea} placeholder={t('your-message')} />;
                        </div>
                    </div>
                    <div className='d-none' id='submitErrorMessage'>
                        <div className='text-center text-danger mb-3'>{t('error-sending-message')}</div>
                    </div>
                    <div className='text-center'>
                        <button
                            className='btn btn-primary btn-xl text-uppercase'
                            id='submitButton'
                            type='submit'
                            disabled={submitting}
                        >
                            {t('send-message')}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default reduxForm({
    form: FORMS_NAMES.CONTACT_FORM,
    validate,
})(ContactUsComponent);
