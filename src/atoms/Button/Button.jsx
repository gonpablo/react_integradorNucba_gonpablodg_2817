import React from 'react'
import { ButtonBig, ButtonSmall, ButtonStyle, ButtonUltraSmall } from './ButtonStyles'

const Button = ({
    id,
    children,
    size = '',
    color = '',
    disabled,
}) => {

      switch(size) { 
          case 'UltraSmall':
              return <ButtonUltraSmall id={id} disabled={disabled} className={color}>{children}</ButtonUltraSmall>;
          case 'Small':
              return <ButtonSmall id={id} disabled={disabled} className={color}>{children}</ButtonSmall>;
          case 'Big':
              return <ButtonBig id={id} disabled={disabled} className={color}>{children}</ButtonBig>;
          case 'UltraBig':
              return <ButtonUltraBig id={id} disabled={disabled} className={color}>{children}</ButtonUltraBig>;
          default:
              return <ButtonStyle id={id} disabled={disabled} className={color}>{children}</ButtonStyle>;
    }
}

export default Button