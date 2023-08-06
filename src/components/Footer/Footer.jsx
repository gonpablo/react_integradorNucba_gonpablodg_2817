import React from 'react'
import { FooterHolder, FooterInfoQr, FooterItem, FooterItemSocial, FooterNavbar, FooterStyle, FooterTitle } from './FooterStyles'
import { GridStyle } from '../../layout/GridStyles'
import SocialIcons from '../../atoms/SocialIcons/SocialIcons'
import NavBarSecondaryLink from '../../atoms/NavBarSecondaryLink/NavBarSecondaryLink'
import { RiFacebookFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri"

const Footer = () => {
  return (
    <FooterStyle>
      <FooterHolder>
        <GridStyle gridxl='4' gridmd='2' gridsm='1' footer='true'>
          <FooterItem>
            <FooterTitle>Seguinos en</FooterTitle>
            <FooterItemSocial>
              <SocialIcons url="#"><RiFacebookFill/></SocialIcons>
              <SocialIcons url="#"><RiInstagramFill/></SocialIcons>
              <SocialIcons url="#"><RiYoutubeFill/></SocialIcons>
            </FooterItemSocial>
          </FooterItem>

          <FooterItem>
            <FooterTitle>Categorias</FooterTitle>
            <FooterNavbar> 
              <ul>
                <NavBarSecondaryLink>Mundo abierto</NavBarSecondaryLink>
                <NavBarSecondaryLink>Plataformas</NavBarSecondaryLink>
                <NavBarSecondaryLink>Deportes</NavBarSecondaryLink>
                <NavBarSecondaryLink>FPS</NavBarSecondaryLink>
                <NavBarSecondaryLink>Aventura</NavBarSecondaryLink>
                <NavBarSecondaryLink>Terror</NavBarSecondaryLink>
              </ul>
            </FooterNavbar>
          </FooterItem>

          <FooterItem>
            <FooterTitle>Secciones</FooterTitle>
            <FooterNavbar>
              <ul>
                <NavBarSecondaryLink>Categorias</NavBarSecondaryLink>
                <NavBarSecondaryLink>Nosotros</NavBarSecondaryLink>
                <NavBarSecondaryLink>Contacto</NavBarSecondaryLink>
                <NavBarSecondaryLink>Boton de arrepentimiento</NavBarSecondaryLink>
              </ul>
            </FooterNavbar>
          </FooterItem>

          <FooterItem>
            <FooterInfoQr>
              <img src="./src/source_img/data_qr.jpg"/>
              <img src="./src/source_img/pagoseguro.png"/>
            </FooterInfoQr>
          </FooterItem>
        </GridStyle>
      </FooterHolder>
    </FooterStyle>
  )
}

export default Footer