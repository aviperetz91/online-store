import React from 'react';

const SelectComponent = (props) => {
    const { id, title, type, checked, handleSelect } = props;
    return (
        <div className='my-2'>
            <input
                className='form-check-input mx-3'
                type={type}
                name={id}
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

export default SelectComponent;
