import { useTranslation } from 'react-i18next';
import services from './servicesMock';
import ServiceItemComponent from './ServiceItemComponent';

const ServicesComponent = () => {
    const { t } = useTranslation();

    const renderServices = () => {
        return services.map((service) => (
            <ServiceItemComponent
                key={service.id}
                icon={service.icon}
                name={service.name}
                description={service.description}
            />
        ));
    };

    return (
        <section className='page-section' id='services'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='section-heading text-uppercase'>{t('services-title')}</h2>
                    <h3 className='section-subheading text-muted'>{t('services-subtitle')}</h3>
                </div>
                <div className='row text-center'>{renderServices()}</div>
            </div>
        </section>
    );
};

export default ServicesComponent;
