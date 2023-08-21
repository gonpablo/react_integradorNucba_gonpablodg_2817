import React from 'react'
import { NavBarSecondaryLinkHref, NavBarSecondaryLinkStyle } from './NavbarSecondaryLinkStyles'

const NavbarSecondaryLink = ({
    children,
    backTo,
}) => {
  return (
    <NavBarSecondaryLinkStyle>
        <NavBarSecondaryLinkHref to={backTo}>{children}</NavBarSecondaryLinkHref>
    </NavBarSecondaryLinkStyle>
  )
}

export default NavbarSecondaryLink