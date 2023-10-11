import React, { useState } from 'react'
import HeaderPage from '../../molecules/HeaderPage/HeaderPage'
import Section from '../../layout/Section'
import Grid from '../../layout/Grid'
import Item from '../../layout/Item'
import {ContactInfo, ContactSocial, Form, Formik } from './ContactStyles'
import { RiMapPinLine, RiWhatsappLine, RiMailLine, RiFacebookFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import SocialIcons from '../../atoms/SocialIcons/SocialIcons'
import Input from '../../atoms/Input/Input'
import { contactInitialValues } from '../../formik/initialValues'
import { contactValidationSchema } from '../../formik/validationSchema'
import Submit from '../../atoms/Button/Submit'
import Alert from '../../atoms/Alert/Alert'

const Contact = () => {

  const [alertState, setAlertState] = useState(false)

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
            <Formik
                initialValues= {contactInitialValues}
                validationSchema= {contactValidationSchema}
                onSubmit={(values, {setSubmitting, resetForm }) => {
                    setSubmitting = false;
                    
                    setTimeout(() => {
                      setSubmitting = true;
                      setAlertState(true);
                      resetForm({values: ''});
                    }, 3200);
                    
                  
                    setTimeout(() => {
                      setAlertState(false);
                    }, 6600);
                }
              }
            >
              {
                ({isSubmitting}) => (
                  <Form>
                    <Input name="nombre" htmlFor="nombre" type="text" id="nombre">Nombre</Input>
                    <Input name="apellido" htmlFor="apellido" type="text" id="apellido">Apellido</Input>
                    <Input name="email" htmlFor="email" type="email" id="email" full='true'>Email</Input>
                    <Input name="mensaje" htmlFor="mensaje" type="textarea" id="mensaje" full='true'>Mensaje</Input>
                    {
                      isSubmitting ? 
                          <Submit color='primary' loading="true">Enviar mensaje</Submit>
                      : 
                          <>
                            <Submit color='primary'>Enviar mensaje</Submit>
                            {alertState ? <Alert>El mensaje se ha enviado exitosamente</Alert> : ''} 
                          </>
                    }
                    
                  </Form>                   
                )}
            </Formik> 
            
        </Item>
      </Grid>
    </Section>
    </>
  )
}

export default Contact