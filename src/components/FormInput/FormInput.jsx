import React from 'react';
import './FormInput.scss';

const FormInput = ({handleChange, label, name, ...otherProps}) => {
  return (
    <div className='form-group'>
      <input 
        className='form-input'
        onChange={handleChange}
        id={`${name}`}
        {...otherProps}
      />
      {
        label
          ? <label htmlFor={`${name}`} className={`${otherProps.value.length  ? 'shrink' : ''} form-input-label`}>{label} </label>
          : null
      }
    </div>
  )
}

export default FormInput
