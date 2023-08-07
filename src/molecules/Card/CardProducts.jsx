import React from 'react'
import Card from './Card'
import { productsBD } from '../../source_db/productsBD'
import Button from '../../atoms/Button/Button'
import Grid from '../../layout/Grid'
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer'


const CardProducts = () => {
  return (
    <>
    <h2 className="--text-center --mb35">Nuestros <strong>productos</strong></h2>
    <ButtonsContainer className='--mb30'>
        <Button size='UltraSmall' color='primary'>Todos</Button>
        <Button size='UltraSmall' color='grey'>Mundo abierto</Button>
        <Button size='UltraSmall' color='grey'>Plataformas</Button>
        <Button size='UltraSmall' color='grey'>Deportes</Button>
        <Button size='UltraSmall' color='grey'>FPS</Button>
    </ButtonsContainer>
    <Grid gridxl='4' gridmd='3' gridsm='2'>
        {
          productsBD.map((prod) => {
              return <Card key={prod.id} {...prod} />
          })
        }
    </Grid>
    </>
  )
}

export default CardProducts