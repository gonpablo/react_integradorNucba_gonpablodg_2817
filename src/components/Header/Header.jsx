import React from 'react'
import { HeaderFooter, HeaderFooterHolder, HeaderHolder, HeaderInnerCenter, HeaderInnerLeft, HeaderInnerNavbar, HeaderInnerRight, HeaderStyle } from './HeaderStyles';
import { RiMenu2Line, RiMapPinLine, RiMailLine, RiShoppingCartLine, RiSearch2Line} from "react-icons/ri";
import NavbarIcon from '../../atoms/NavbarIcon/NavbarIcon';
import NavbarLink from '../../atoms/NavbarLink/NavbarLink';

const Header = () => {
  return (
    <HeaderStyle>
        <HeaderHolder>
            <HeaderInnerLeft>
                <NavbarIcon show="--mobile"><RiMenu2Line /></NavbarIcon>
                <a className='logo' href="#"><img src="logo-tienda.png"/></a>
            </HeaderInnerLeft>
            <HeaderInnerCenter>
                <input type="text" placeholder="¿Qué estás buscando?" aria-label="¿Qué estás buscando?" required=""></input>
                <RiSearch2Line />
            </HeaderInnerCenter>
            <HeaderInnerRight>
                <HeaderInnerNavbar>
                    <ul>
                        <NavbarIcon show="--desktop"><RiMapPinLine /></NavbarIcon>
                        <NavbarIcon show="--desktop"><RiMailLine /></NavbarIcon>
                        <NavbarIcon show="--dropdown"><RiShoppingCartLine /></NavbarIcon>
                    </ul>
                </HeaderInnerNavbar>
            </HeaderInnerRight>
        </HeaderHolder>
        <HeaderFooter>
            <HeaderFooterHolder>
                <HeaderInnerNavbar>
                    <ul>
                        <NavbarLink>Mundo abierto</NavbarLink>
                        <NavbarLink>Plataformas</NavbarLink>
                        <NavbarLink>Deportes</NavbarLink>
                        <NavbarLink>FPS</NavbarLink>
                        <NavbarLink>Aventura</NavbarLink>
                        <NavbarLink>Terror</NavbarLink>
                        <NavbarLink featured='true'>Ofertas</NavbarLink>
                    </ul>
                </HeaderInnerNavbar>
            </HeaderFooterHolder>
        </HeaderFooter>

    </HeaderStyle>

  )
}

export default Header


