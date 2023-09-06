import React, { useContext } from 'react'
import { HeaderFooter, HeaderFooterHolder, HeaderHolder, HeaderInnerCenter, HeaderInnerLeft, HeaderInnerNavbar, HeaderInnerRight, HeaderLogo, HeaderStyle } from './HeaderStyles';
import { RiMenu2Line, RiBuilding4Line, RiMailLine, RiShoppingCartLine, RiSearch2Line} from "react-icons/ri";
import NavbarIcon from '../../atoms/NavbarIcon/NavbarIcon';
import NavbarPrimary from '../../molecules/NavbarPrimary/NavbarPrimary';
import Context from '../../context/Context';


const Header = () => {
  const {openCart, openMenuMobile} = useContext(Context);

  return (
    <HeaderStyle>
        <HeaderHolder>
            <HeaderInnerLeft>
                <NavbarIcon show="--mobile"><RiMenu2Line onClick={() => openMenuMobile()}/></NavbarIcon>
                <HeaderLogo to="/"><img src="logo-tienda.png"/></HeaderLogo>
            </HeaderInnerLeft>
            <HeaderInnerCenter>
                <input type="text" placeholder="¿Qué estás buscando?" aria-label="¿Qué estás buscando?" required=""></input>
                <RiSearch2Line />
            </HeaderInnerCenter>
            <HeaderInnerRight>
                <HeaderInnerNavbar>
                    <ul>
                        <NavbarIcon backTo="/nosotros" show="--desktop"><RiBuilding4Line /></NavbarIcon>
                        <NavbarIcon backTo="/contacto" show="--desktop"><RiMailLine /></NavbarIcon>
                        <NavbarIcon><RiShoppingCartLine onClick={() => openCart()} /></NavbarIcon>
                    </ul>
                </HeaderInnerNavbar>
            </HeaderInnerRight>
        </HeaderHolder>
        <HeaderFooter>
            <HeaderFooterHolder>
                <HeaderInnerNavbar>
                    <NavbarPrimary/>
                </HeaderInnerNavbar>
            </HeaderFooterHolder>
        </HeaderFooter>
    </HeaderStyle>

  )
}

export default Header


