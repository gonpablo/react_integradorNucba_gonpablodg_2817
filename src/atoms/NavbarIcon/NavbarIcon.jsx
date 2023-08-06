import React from 'react'
import { NavbarIconStyle } from './NavbarIconStyles'


const NavbarIcon = ({
  children,
  show = '',
}) => {
  return (
      <NavbarIconStyle className={show}>
        <a href="#">{children}</a>
      </NavbarIconStyle>
  )
}

export default NavbarIcon