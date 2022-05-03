import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import closeIcon from '../assets/img/close-icon.svg';
import ModalComponent from './ModalComponent';

const GalleryItemComponent = (props) => {
    const { title, summary, description, image } = props;
    const { t } = useTranslation();

    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <>
            <div className='col-lg-4 col-sm-6 mb-4' onClick={handleShow}>
                <div className='portfolio-item pointer'>
                    <div className='portfolio-link pointer' onClick={handleShow}>
                        <div className='portfolio-hover'>
                            <div className='portfolio-hover-content'>
                                <i className='fas fa-plus fa-3x'></i>
                            </div>
                        </div>
                        <img className='img-fluid' src={image} alt='item-img' />
                    </div>
                    <div className='portfolio-caption'>
                        <div className='portfolio-caption-heading'>{title}</div>
                        <div className='portfolio-caption-subheading text-muted'>{summary}</div>
                    </div>
                </div>
            </div>
            <ModalComponent classes='portfolio-modal' show={showModal} handleClose={handleClose}>
                <div className='close-modal' onClick={handleClose}>
                    <img src={closeIcon} alt='Close modal' />
                </div>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='modal-body'>
                                <h2 className='text-uppercase mb-5'>{title}</h2>
                                <p className='item-intro text-muted'>{summary}</p>
                                <img className='img-fluid d-block mx-auto' src={image} alt='item-img' />
                                <p>{description}</p>
                                <button className='btn btn-primary btn-xl text-uppercase' onClick={handleClose}>
                                    <i className='fas fa-times me-1'></i>
                                    {t('close')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalComponent>
        </>
    );
};

export default GalleryItemComponent;
