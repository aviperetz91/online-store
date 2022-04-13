import { useTranslation } from 'react-i18next';
import closeIcon from '../assets/img/close-icon.svg';
import Rating from '@mui/material/Rating';

const ModalComponent = (props) => {
    const { t } = useTranslation();
    const { id, title, summary, description, image, btnText, price, rating } = props;

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
                                    <h2 className='text-uppercase mb-5'>{title}</h2>
                                    {summary && <p className='item-intro text-muted'>{summary}</p>}
                                    <img className='img-fluid d-block mx-auto' src={image} alt='...' />
                                    <p>{description}</p>
                                    {rating && (
                                        <div className='mb-4'>
                                            <Rating name='rating' value={rating} readOnly size='large' />
                                        </div>
                                    )}
                                    {price && <p className='fw-bold fs-3'>{`${t('price-symbol')}${price}`}</p>}
                                    <button
                                        className='btn btn-primary btn-xl text-uppercase'
                                        data-bs-dismiss='modal'
                                        type='button'
                                    >
                                        <i className='fas fa-times me-1'></i>
                                        {btnText}
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

export default ModalComponent;
