import React from 'react';

const SelectComponent = (props) => {
    const { _id, title, type, checked, handleSelect } = props;
    return (
        <div className='my-2'>
            <input
                className='form-check-input mx-3'
                type={type}
                name={_id}
                id={_id}
                checked={checked}
                onChange={() => handleSelect(_id)}
            ></input>
            <label className='form-check-label pointer' htmlFor={_id}>
                {title}
            </label>
        </div>
    );
};

export default SelectComponent;
