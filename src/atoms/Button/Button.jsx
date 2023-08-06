import React from 'react'
import { ButtonBig, ButtonSmall, ButtonStyle, ButtonUltraSmall } from './ButtonStyles'

const Button = ({
    children,
    disabled = false,
    size = '',
    color = ''
}) => {

      switch(size) { 
          case 'UltraSmall':
              return <ButtonUltraSmall className={color}>{children}</ButtonUltraSmall>;
          case 'Small':
              return <ButtonSmall className={color}>{children}</ButtonSmall>;
          case 'Big':
              return <ButtonBig className={color}>{children}</ButtonBig>;
          case 'UltraBig':
              return <ButtonUltraBig className={color}>{children}</ButtonUltraBig>;
          default:
              return <ButtonStyle className={color}>{children}</ButtonStyle>;
    }
}

export default Button