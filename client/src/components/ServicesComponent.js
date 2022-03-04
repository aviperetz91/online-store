import { useTranslation } from 'react-i18next';
import { FaShoppingCart, FaShippingFast } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';

const ServicesComponent = () => {
    const { t } = useTranslation();

    return (
        <section class='page-section' id='services'>
            <div class='container'>
                <div class='text-center'>
                    <h2 class='section-heading text-uppercase'>{t('services-title')}</h2>
                    <h3 class='section-subheading text-muted'>{t('services-subtitle')}</h3>
                </div>
                <div class='row text-center'>
                    <div class='col-md-4'>
                        <div className='service-item-circle bg-primary'>
                            <span class='fa-stack fa-4x'>
                                <FaShoppingCart className='service-item-icon' />
                            </span>
                        </div>
                        <h4 class='my-3'>{t('e-commerce')}</h4>
                        <p class='text-muted'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo
                            inventore harum ex magni, dicta impedit.
                        </p>
                    </div>
                    <div class='col-md-4'>
                        <div className='service-item-circle bg-primary'>
                            <span class='fa-stack fa-4x'>
                                <FaShippingFast className='service-item-icon' />
                            </span>
                        </div>
                        <h4 class='my-3'>{t('deliveries')}</h4>
                        <p class='text-muted'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo
                            inventore harum ex magni, dicta impedit.
                        </p>
                    </div>
                    <div class='col-md-4'>
                        <div className='service-item-circle bg-primary'>
                            <span class='fa-stack fa-4x'>
                                <RiCustomerService2Fill className='service-item-icon' />
                            </span>
                        </div>
                        <h4 class='my-3'>{t('customer-service')}</h4>
                        <p class='text-muted'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo
                            inventore harum ex magni, dicta impedit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesComponent;
