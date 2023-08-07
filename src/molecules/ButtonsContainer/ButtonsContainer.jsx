import React from 'react'
import { ButtonsContainerStyle } from './ButtonsContainerStyles'

const ButtonsContainer = ({
    children,
    className
}) => {
  return (
    <ButtonsContainerStyle className={className}>
        {children}
    </ButtonsContainerStyle>
  )
}

export default ButtonsContainer