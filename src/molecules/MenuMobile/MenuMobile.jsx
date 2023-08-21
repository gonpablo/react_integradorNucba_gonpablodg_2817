import React, { useContext } from 'react'
import { MenuMobileFooter, MenuMobileNav, MenuMobileStyles, MenuMobileTop } from './MenuMobileStyles'
import { RiCloseLine, RiBuilding4Line, RiMailLine } from "react-icons/ri";
import NavBarSecondaryLink from '../../atoms/NavbarSecondaryLink/NavbarSecondaryLink';
import NavbarPrimary from '../NavbarPrimary/NavbarPrimary';
import Context from '../../context/Context';



const MenuMobile = () => {

  const {isActive, openMenuMobile} = useContext(Context);
  return (

    <MenuMobileStyles className={(isActive) ? '--active' : '' }>
        <MenuMobileTop>
            <RiCloseLine onClick={() => openMenuMobile()} />
            <h2>Categorias</h2>
        </MenuMobileTop>
          
        <MenuMobileNav>
            <NavbarPrimary/>
        </MenuMobileNav>

        <MenuMobileFooter>
          <ul>
            <NavBarSecondaryLink backTo="/nosotros"><RiBuilding4Line/>Nosotros</NavBarSecondaryLink>
            <NavBarSecondaryLink backTo="/contacto"><RiMailLine/>Contacto</NavBarSecondaryLink>
          </ul>
        </MenuMobileFooter>
    </MenuMobileStyles>
  )
}

export default MenuMobile