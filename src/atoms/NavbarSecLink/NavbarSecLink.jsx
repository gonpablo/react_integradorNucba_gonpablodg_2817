import React from 'react'
import { NavbarSecLinkHref, NavbarSecLinkStyle } from './NavbarSecLinkStyles'

const NavbarSecLink = ({
    children,
    backTo,
}) => {
  return (
    <NavbarSecLinkStyle>
        <NavbarSecLinkHref to={backTo}>{children}</NavbarSecLinkHref>
    </NavbarSecLinkStyle>
  )
}

export default NavbarSecLink