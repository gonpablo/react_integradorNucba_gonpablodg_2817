import React from 'react'
import { NavbarIconButton, NavbarIconCountCart, NavbarIconLinkHref, NavbarIconStyle } from './NavbarIconStyles'


const NavbarIcon = ({
  children,
  show = '',
  backTo = '',
  quantity,
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
          { quantity ? <NavbarIconCountCart>{quantity}</NavbarIconCountCart> : ''}
        </NavbarIconStyle>
      )
  }
 }
}

export default NavbarIcon