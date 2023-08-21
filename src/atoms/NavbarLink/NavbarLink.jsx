import React from 'react'
import { NavbarLinkHref, NavbarLinkStyle } from './NavbarLinkStyles'

const NavbarLink = ({
    children,
    show = '',
    featured = '',
    backTo,
  }) => {

        return ( <NavbarLinkStyle className={show}>
                  <NavbarLinkHref featured={featured} to={backTo}>{children}</NavbarLinkHref>
                </NavbarLinkStyle>
     )
        
  }

export default NavbarLink