import { Modal } from 'react-bootstrap';

const ModalComponent = (props) => {
    const { classes, handleClose, isStatic, children, show, title, body, btnPrimaryText, btnSecondaryText } = props;

    return (
        <Modal
            className={classes ? classes : ''}
            show={show}
            onHide={handleClose}
            backdrop={isStatic ? 'static' : ''}
            keyboard={!isStatic}
        >
            {children ? (
                children
            ) : (
                <>
                    <div className='modal-header'>
                        <h5 className='modal-title'>{title}</h5>
                        <button className='btn-close m-0' onClick={handleClose}></button>
                    </div>
                    <div className='modal-body'>{body}</div>
                    <div className='modal-footer'>
                        {btnSecondaryText && <button className='btn btn-secondary'>{btnSecondaryText}</button>}
                        <button className='btn btn-primary'>{btnPrimaryText}</button>
                    </div>
                </>
            )}
        </Modal>
    );
};

export default ModalComponent;
