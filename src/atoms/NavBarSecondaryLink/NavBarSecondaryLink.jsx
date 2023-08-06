import React from 'react'
import { NavBarSecondaryLinkStyle } from './NavBarSecondaryLinkStyles'

const NavBarSecondaryLink = ({
    children,
}) => {
  return (
    <NavBarSecondaryLinkStyle>
        <a href="#">{children}</a>
    </NavBarSecondaryLinkStyle>
  )
}

export default NavBarSecondaryLink