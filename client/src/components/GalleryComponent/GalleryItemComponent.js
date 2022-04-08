import { useTranslation } from 'react-i18next';
import ModalComponent from '../ModalComponent';

const GalleryItemComponent = (props) => {
    const { id, title, summary, description, image } = props;
    const { t } = useTranslation();
    return (
        <>
            <div className='col-lg-4 col-sm-6 mb-4'>
                <div className='portfolio-item pointer'>
                    <div className='portfolio-link pointer' data-bs-toggle='modal' data-bs-target={`#item-${id}`}>
                        <div className='portfolio-hover'>
                            <div className='portfolio-hover-content'>
                                <i className='fas fa-plus fa-3x'></i>
                            </div>
                        </div>
                        <img className='img-fluid' src={image} alt='...' />
                    </div>
                    <div className='portfolio-caption'>
                        <div className='portfolio-caption-heading'>{title}</div>
                        <div className='portfolio-caption-subheading text-muted'>{summary}</div>
                    </div>
                </div>
            </div>
            <ModalComponent
                id={`item-${id}`}
                title={title}
                summary={summary}
                description={description}
                image={image}
                btnText={t('close')}
            />
        </>
    );
};

export default GalleryItemComponent;
