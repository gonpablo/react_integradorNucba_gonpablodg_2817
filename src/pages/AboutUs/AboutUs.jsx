import React from 'react'
import HeaderPage from '../../molecules/HeaderPage/HeaderPage'
import {AboutUsImage, AboutUsItem } from './AboutUsStyles'
import Section from '../../layout/Section'
import Grid from '../../layout/Grid'

const AboutUs = () => {
  return (
    <>
        <HeaderPage backTo="/">Sobre nosotros</HeaderPage>
        <Section>
          <Grid gridxl='2' gridmd='1' gridsm='1' big='true'>
            <AboutUsItem>
              <h3 className='--mb12'>Somos TShop, la tienda Nº 1 en Videojuegos</h3>
              <p className='--mb50'>
              Somos un comercio especializado en videojuegos de todas las épocas. Vendemos, compramos y canjeamos desde productos retro que se comercializaban en la década del 80 hasta los últimos lanzamientos que salen al mercado hoy.
              </p>

              <h3 className='--mb12'>Nuestro publico</h3>
              <p>
                <strong>·Particular:</strong> nos especializamos en entusiastas de PC Gamers y hardware de alta gama. De igual forma, tenemos equipos y piezas para cubrir cualquier necesidad o requerimiento.<br/><br/>
                <strong>·Corporativo:</strong> brindamos soluciones a la medida de cada empresa. Productos de alta calidad, atención inmediata en licencia y soporte.<br/><br/>
                <strong>·Revendedores:</strong> queremos que crezcas con nosotros, para ello disponemos de descuentos especiales pensando en tu beneficio.
              </p>
            </AboutUsItem>

            <AboutUsItem>
              <AboutUsImage src='img_aboutus.jpg'/>
            </AboutUsItem>
            
          </Grid>
        </Section>
    </>
  )
}

export default AboutUs