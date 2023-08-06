import React from 'react'
import { NavbarLinkStyle, NavbarLinkStyleFeatured } from './NavbarLinkStyles'

const NavbarLink = ({
    children,
    show = '',
    featured = '',
  }) => {
      switch(featured) { 
        case 'true':
        return <NavbarLinkStyleFeatured className={show}>
              <a href="#">{children}</a>
              </NavbarLinkStyleFeatured>
        default:
            return <NavbarLinkStyle className={show}>
            <a href="#">{children}</a>
            </NavbarLinkStyle>
      }
        
  }

export default NavbarLink