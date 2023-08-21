import React from 'react'
import { FooterHolder, FooterInfoQr, FooterItem, FooterItemSocial, FooterNavbar, FooterStyle, FooterTitle } from './FooterStyles'
import SocialIcons from '../../atoms/SocialIcons/SocialIcons'
import NavbarSecLink from '../../atoms/NavbarSecLink/NavbarSecLink'
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
                <NavbarSecLink backTo="/productos">Mundo abierto</NavbarSecLink>
                <NavbarSecLink backTo="/productos">Plataformas</NavbarSecLink>
                <NavbarSecLink backTo="/productos">Deportes</NavbarSecLink>
                <NavbarSecLink backTo="/productos">FPS</NavbarSecLink>
                <NavbarSecLink backTo="/productos">Aventura</NavbarSecLink>
                <NavbarSecLink backTo="/productos">Terror</NavbarSecLink>
              </ul>
            </FooterNavbar>
          </FooterItem>


          <FooterItem>
            <FooterTitle>Secciones</FooterTitle>
            <FooterNavbar>
              <ul>
                <NavbarSecLink backTo="/nosotros">Nosotros</NavbarSecLink>
                <NavbarSecLink backTo="/contacto">Contacto</NavbarSecLink>
                <NavbarSecLink>Boton de arrepentimiento</NavbarSecLink>
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