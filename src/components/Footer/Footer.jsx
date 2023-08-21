import React from 'react'
import { FooterHolder, FooterInfoQr, FooterItem, FooterItemSocial, FooterNavbar, FooterStyle, FooterTitle } from './FooterStyles'
import SocialIcons from '../../atoms/SocialIcons/SocialIcons'
import NavbarSecondaryLink from '../../atoms/NavbarSecondaryLink/NavbarSecondaryLink'
import { RiFacebookFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri"
import Grid from '../../layout/Grid'
import Copyright from '../../molecules/Copyright/Copyright'

const Footer = () => {
  return (
    <>
    <FooterStyle>
      <FooterHolder>
        <Grid gridxl='4' gridmd='2' gridsm='1' big='true'>
          <FooterItem>
            <FooterTitle>Categorias</FooterTitle>
            <FooterNavbar> 
              <ul>
                <NavbarSecondaryLink backTo="/productos">Mundo abierto</NavbarSecondaryLink>
                <NavbarSecondaryLink backTo="/productos">Plataformas</NavbarSecondaryLink>
                <NavbarSecondaryLink backTo="/productos">Deportes</NavbarSecondaryLink>
                <NavbarSecondaryLink backTo="/productos">FPS</NavbarSecondaryLink>
                <NavbarSecondaryLink backTo="/productos">Aventura</NavbarSecondaryLink>
                <NavbarSecondaryLink backTo="/productos">Terror</NavbarSecondaryLink>
              </ul>
            </FooterNavbar>
          </FooterItem>

          <FooterItem>
            <FooterTitle>Secciones</FooterTitle>
            <FooterNavbar>
              <ul>
                <NavBarSecondaryLink backTo="/nosotros">Nosotros</NavBarSecondaryLink>
                <NavBarSecondaryLink backTo="/contacto">Contacto</NavBarSecondaryLink>
                <NavBarSecondaryLink>Boton de arrepentimiento</NavBarSecondaryLink>
              </ul>
            </FooterNavbar>
          </FooterItem>

          <FooterItem>
            <FooterTitle>Seguinos en</FooterTitle>
            <FooterItemSocial>
              <SocialIcons url="#"><RiFacebookFill/></SocialIcons>
              <SocialIcons url="#"><RiInstagramFill/></SocialIcons>
              <SocialIcons url="#"><RiYoutubeFill/></SocialIcons>
            </FooterItemSocial>
          </FooterItem>

          <FooterItem>
            <FooterInfoQr>
              <img src="data_qr.jpg"/>
              <img src="pagoseguro.png"/>
            </FooterInfoQr>
          </FooterItem>
        </Grid>
      </FooterHolder>
    </FooterStyle>
    <Copyright/>
    </>
  )
}

export default Footer