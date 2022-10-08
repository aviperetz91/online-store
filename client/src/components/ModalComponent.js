import { Modal } from 'react-bootstrap';

const ModalComponent = (props) => {
    const {
        classes,
        handleClose,
        isStatic,
        children,
        show,
        title,
        body,
        btnPrimaryText,
        btnPrimaryHandler,
        btnSecondaryText,
        btnSecondaryHandler,
        centered,
    } = props;

    return (
        <Modal
            className={classes ? classes : ''}
            show={show}
            onHide={handleClose}
            backdrop={isStatic ? 'static' : ''}
            keyboard={!isStatic}
            centered={centered}
        >
            {children ? (
                children
            ) : (
                <>
                    {title && (
                        <div className='modal-header'>
                            <h5 className='modal-title'>{title}</h5>
                            <button className='btn-close m-0' onClick={handleClose}></button>
                        </div>
                    )}
                    {body && <div className='modal-body'>{body}</div>}
                    <div className='modal-footer'>
                        {btnSecondaryText && (
                            <button className='btn btn-secondary' onClick={btnSecondaryHandler}>
                                {btnSecondaryText}
                            </button>
                        )}
                        {btnPrimaryText && (
                            <button className='btn btn-primary' onClick={btnPrimaryHandler}>
                                {btnPrimaryText}
                            </button>
                        )}
                    </div>
                </>
            )}
        </Modal>
    );
};

export default ModalComponent;
