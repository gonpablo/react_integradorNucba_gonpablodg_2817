import React from 'react'
import { ButtonBig, ButtonSmall, ButtonStyle, ButtonUltraSmall } from './ButtonStyles'

const Button = ({
    id,
    children,
    size = '',
    color = '',
    disabled,
    hidden = false,
    loading,
    type,
    onClick  = (e) => e.preventDefault(), 
}) => {

      switch(size) { 
          case 'UltraSmall':
              return <ButtonUltraSmall id={id} disabled={disabled} hidden={hidden} className={color} loading={loading} type={type} onClick={onClick}>{children}</ButtonUltraSmall>;
          case 'Small':
              return <ButtonSmall id={id} disabled={disabled} hidden={hidden} className={color} loading={loading} type={type} onClick={onClick}>{children}</ButtonSmall>;
          case 'Big':
              return <ButtonBig id={id} disabled={disabled} hidden={hidden} className={color} loading={loading} type={type} onClick={onClick}>{children}</ButtonBig>;
          case 'UltraBig':
              return <ButtonUltraBig id={id} disabled={disabled} hidden={hidden} className={color} loading={loading} type={type} onClick={onClick}>{children}</ButtonUltraBig>;
          default:
              return <ButtonStyle id={id} disabled={disabled} hidden={hidden} className={color} loading={loading} type={type} onClick={onClick}>{children}</ButtonStyle>;
    }
}

export default Button