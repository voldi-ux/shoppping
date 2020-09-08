import React from 'react'

import './input.scss'

const FormInput = ({handleChange, label,...props}) => (
    <div className='form-group'>
        {console.log(props.value ? true :false)}
          <input className='form-input' onChange={handleChange} {...props} {...props}/>
          {
              label ?  <label className={`${props.value ? 'shrink': ''} form-input-label`}>
                  {label}
              </label> : null
          }
    </div>
)

export default FormInput