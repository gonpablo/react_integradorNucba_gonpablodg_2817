import React from 'react'
import HeaderPage from '../../molecules/HeaderPage/HeaderPage'
import Section from '../../layout/Section'
import Grid from '../../layout/Grid'
import Item from '../../layout/Item'
import { ContactFormContainer, ContactInfo, ContactSocial } from './ContactStyles'
import { RiMapPinLine, RiWhatsappLine, RiMailLine, RiFacebookFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import SocialIcons from '../../atoms/SocialIcons/SocialIcons'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'


const Contact = () => {
  return (
    <>
    <HeaderPage backTo="/">Contacto</HeaderPage>
    <Section>
      <Grid gridxl='2' gridmd='2' gridsm='1' big='true'>
        <Item>
            <h3 className='--mb25'>Sucursal Central</h3>
            <ContactInfo className='--mb50'>
                <li><RiMapPinLine/>Florida 537 Local 370 (CABA)</li>
                <li><RiWhatsappLine/>+54 911 3934 1696</li>
                <li><RiMailLine/>contacto@tshop.com.ar</li>
            </ContactInfo>

            
            <h3 className='--mb25'>Seguinos en</h3>
            <ContactSocial>
              <SocialIcons color='#3b5998' url="#"><RiFacebookFill/></SocialIcons>
              <SocialIcons color='#de1b85' url="#"><RiInstagramFill/></SocialIcons>
              <SocialIcons color='#c4302b' url="#"><RiYoutubeFill/></SocialIcons>
            </ContactSocial>
        </Item>

        <Item>
            <h3 className='--mb6'>Contactate con nosotros</h3>
            <p className='--mb25'>Para contactarse con nosotros, completa el siguiente <strong>formulario de contacto</strong></p>
            <ContactFormContainer>
                <Input type="text">Nombre</Input>
                <Input type="text">Apellido</Input>
                <Input type="email" full='true'>Email</Input>
                <Input type="textarea" full='true'>Mensaje</Input>
                <Button color='primary'>Enviar mensaje</Button>
            </ContactFormContainer>
        </Item>
      </Grid>
    </Section>
    </>
  )
}

export default Contact