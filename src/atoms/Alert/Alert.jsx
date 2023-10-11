import React from 'react'
import { AlertStyle } from './AlertStyles'
import { RiCheckboxCircleLine } from "react-icons/ri";

const Alert = ({
    children,
}) => {
    
  return (
    <AlertStyle><RiCheckboxCircleLine/><span>{children}</span></AlertStyle>
  )
}

export default Alert