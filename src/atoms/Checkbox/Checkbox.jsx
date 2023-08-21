import React from 'react'
import { CheckboxStyle } from './CheckboxStyles'


const Checkbox = ({
    label, 
    value, 
    onChange 
}) => {

  return (
    <CheckboxStyle>
        {label}
        <input type="checkbox" value={value} onChange={onChange}/>
        <span></span>
    </CheckboxStyle>
  )
}

export default Checkbox