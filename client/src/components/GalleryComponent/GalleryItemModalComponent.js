import { useTranslation } from 'react-i18next';
import closeIcon from '../../assets/img/close-icon.svg';

const GalleryItemModalComponent = ({ id, name, summary, description, image }) => {
    const { t } = useTranslation();

    return (
        <div className='portfolio-modal modal fade' id={id} tabIndex='-1' role='dialog' aria-hidden='true'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='close-modal' data-bs-dismiss='modal'>
                        <img src={closeIcon} alt='Close modal' />
                    </div>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-lg-8'>
                                <div className='modal-body'>
                                    <h2 className='text-uppercase'>{name}</h2>
                                    <p className='item-intro text-muted'>{summary}</p>
                                    <img className='img-fluid d-block mx-auto' src={image} alt='...' />
                                    <p>{description}</p>
                                    <button
                                        className='btn btn-primary btn-xl text-uppercase'
                                        data-bs-dismiss='modal'
                                        type='button'
                                    >
                                        <i className='fas fa-times me-1'></i>
                                        {t('close')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryItemModalComponent;
