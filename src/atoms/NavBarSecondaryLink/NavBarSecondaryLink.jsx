import React from 'react'
import { NavbarSecondaryLinkHref, NavbarSecondaryLinkStyle } from './NavbarSecondaryLinkStyles'

const NavbarSecondaryLink = ({
    children,
    backTo,
}) => {
  return (
    <NavbarSecondaryLinkStyle>
        <NavbarSecondaryLinkHref to={backTo}>{children}</NavbarSecondaryLinkHref>
    </NavbarSecondaryLinkStyle>
  )
}

export default NavbarSecondaryLink