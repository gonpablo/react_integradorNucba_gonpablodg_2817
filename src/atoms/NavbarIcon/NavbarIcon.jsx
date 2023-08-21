import React from 'react'
import { NavbarIconButton, NavbarIconLinkHref, NavbarIconStyle } from './NavbarIconStyles'


const NavbarIcon = ({
  children,
  show = '',
  backTo = '',
}) => {
  {
  if (backTo != '') {
      return ( 
          <NavbarIconStyle className={show}>
            <NavbarIconLinkHref to={backTo}>{children}</NavbarIconLinkHref>
          </NavbarIconStyle>
      )
  } else {
      return ( 
        <NavbarIconStyle className={show}>
          <NavbarIconButton>{children}</NavbarIconButton>
        </NavbarIconStyle>
      )
  }
 }
}

export default NavbarIcon