import React from 'react'
import { InputStyle } from './InputStyles'

const Input = ({
    children,
    type,
    full = '',
}) => {
    
    switch(type) { 
        case 'textarea':
            return (<InputStyle full={full}><textarea id={children} required></textarea>
            <label className='--textarea'>{children}</label></InputStyle>)
        default:
        return (<InputStyle full={full}>
        <input type={type} id={children} required/>
        <label>{children}</label>
        </InputStyle>)
    }
  
}

export default Input