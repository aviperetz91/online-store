import { useTranslation } from 'react-i18next';
import services from '../../constants/servicesConstants';
import ServiceItem from './ServiceItem';

const ServicesComponent = () => {
    const { t } = useTranslation();

    const renderServices = () => {
        return services.map((service) => (
            <ServiceItem icon={service.icon} name={service.name} description={service.description} />
        ));
    };

    return (
        <section class='page-section' id='services'>
            <div class='container'>
                <div class='text-center'>
                    <h2 class='section-heading text-uppercase'>{t('services-title')}</h2>
                    <h3 class='section-subheading text-muted'>{t('services-subtitle')}</h3>
                </div>
                <div class='row text-center'>{renderServices()}</div>
            </div>
        </section>
    );
};

export default ServicesComponent;
