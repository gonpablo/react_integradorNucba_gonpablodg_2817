import React from 'react'
import { ButtonsContainerStyle } from './ButtonsContainerStyles'

const ButtonsContainer = ({
    children,
}) => {
  return (
    <ButtonsContainerStyle>
        {children}
    </ButtonsContainerStyle>
  )
}

export default ButtonsContainer