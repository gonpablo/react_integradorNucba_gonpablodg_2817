
import React from 'react'
import { HeroStyle, HeroHolder, HeroSlider } from './HeroStyles'
import Button from '../../atoms/Button/Button';



const Hero = () => {
  const style = {
    backgroundImage: {
      backgroundImage: "url(img_hero_1.jpg)",
    }, 
  };

  return (
    <HeroStyle>
      <HeroSlider style={style.backgroundImage}></HeroSlider>
      <HeroHolder>
          <h1>TShop Games</h1>
          <p>La mayor variedad en videojuegos</p>
          <Button size='Big' color='primary'>Empeza ahora</Button>
      </HeroHolder>
    </HeroStyle>
  )
}


export default Hero

