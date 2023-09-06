import React, { useContext } from 'react'
import { MenuMobileFooter, MenuMobileNav, MenuMobileStyles, MenuMobileTop } from './MenuMobileStyles'
import { RiCloseLine, RiBuilding4Line, RiMailLine } from "react-icons/ri";
import NavbarSecLink from '../../atoms/NavbarSecLink/NavbarSecLink';
import NavbarPrimary from '../NavbarPrimary/NavbarPrimary';
import Context from '../../context/Context';



const MenuMobile = () => {

  const {isActiveMenuMobile, openMenuMobile} = useContext(Context);
  
  return (
    <MenuMobileStyles className={(isActiveMenuMobile) ? '--active' : '' }>
        <MenuMobileTop>
            <RiCloseLine onClick={() => openMenuMobile()} />
            <h2>Categorias</h2>
        </MenuMobileTop>
          
        <MenuMobileNav>
            <NavbarPrimary/>
        </MenuMobileNav>

        <MenuMobileFooter>
          <ul>
            <NavbarSecLink backTo="/nosotros"><RiBuilding4Line/>Nosotros</NavbarSecLink>
            <NavbarSecLink backTo="/contacto"><RiMailLine/>Contacto</NavbarSecLink>
          </ul>
        </MenuMobileFooter>
    </MenuMobileStyles>
  )
}

export default MenuMobile