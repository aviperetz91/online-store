import { useTranslation } from 'react-i18next';
import galleryItems from '../mock/galleryItemsMock';
import GalleryItemComponent from './GalleryItemComponent';

const GalleryComponent = () => {
    const { t } = useTranslation();

    const renderGalleryItems = () => {
        return galleryItems.map((item) => (
            <GalleryItemComponent
                key={item._id}
                id={item._id}
                title={item.title}
                summary={item.summary}
                description={item.description}
                image={item.image}
            />
        ));
    };

    return (
        <section className='page-section bg-light' id='gallery'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='section-heading text-uppercase'>{t('gallery')}</h2>
                    <h3 className='section-subheading text-muted'>{t('gallery-subtitle')}</h3>
                </div>
                <div className='row'>{renderGalleryItems()}</div>
            </div>
        </section>
    );
};

export default GalleryComponent;
