import React from 'react';

const SpinnerComponent = ({ height }) => (
    <div className='d-flex justify-content-center align-items-center' style={{ height: height }}>
        <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
        </div>
    </div>
);

export default SpinnerComponent;
