import React from 'react'
import { ButtonBig, ButtonSmall, ButtonStyle, ButtonUltraSmall } from './ButtonStyles'

const Button = ({
    children,
    disabled = false,
    size = '',
    color = '',
    url,
}) => {

      switch(size) { 
          case 'UltraSmall':
              return <ButtonUltraSmall href={url} className={color}>{children}</ButtonUltraSmall>;
          case 'Small':
              return <ButtonSmall href={url} className={color}>{children}</ButtonSmall>;
          case 'Big':
              return <ButtonBig href={url} className={color}>{children}</ButtonBig>;
          case 'UltraBig':
              return <ButtonUltraBig href={url} className={color}>{children}</ButtonUltraBig>;
          default:
              return <ButtonStyle href={url} className={color}>{children}</ButtonStyle>;
    }
}

export default Button