import React from 'react';

const RadioComponent = (props) => {
    const { id, title, checked, handleSelect } = props;
    return (
        <div className='my-2'>
            <input
                className='form-check-input mx-3'
                type='radio'
                name='category'
                id={id}
                checked={checked}
                onChange={() => handleSelect(id)}
            ></input>
            <label className='form-check-label pointer' htmlFor={id}>
                {title}
            </label>
        </div>
    );
};

export default RadioComponent;
