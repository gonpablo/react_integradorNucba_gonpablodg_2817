import React from 'react'
import Card from '../../molecules/Card/Card'
import { productsBD } from '../../source_db/productsBD'
import Button from '../../atoms/Button/Button'
import Grid from '../../layout/Grid'
import Hero from '../../components/Hero/Hero'
import Section from '../../layout/Section'
import { HomeButtonsContainer } from './HomeStyles'


function Home() {
  return (
    <>
        <Hero/>
        <Section>
            <h2 className="--text-center --mb35">Juegos <strong>destacados</strong></h2>
            <HomeButtonsContainer className='--mb30'>
                <Button size='UltraSmall' color='primary'>Todos</Button>
                <Button size='UltraSmall' color='grey'>Mundo abierto</Button>
                <Button size='UltraSmall' color='grey'>Plataformas</Button>
                <Button size='UltraSmall' color='grey'>Deportes</Button>
                <Button size='UltraSmall' color='grey'>FPS</Button>
            </HomeButtonsContainer>
            <Grid gridxl='4' gridmd='3' gridsm='2'>
                {
                productsBD.map((prod) => {
                    if(prod.id <= 8) {
                      return <Card key={prod.id } {...prod} />  
                    }
                })
                }
            </Grid>
        </Section>
    </>
  )
}

export default Home
