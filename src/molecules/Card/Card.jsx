import React from 'react'
import { CardImageContainer, CardInfoCategories, CardInfoContainer, CardInfoPrice, CardInfoTag, CardInfoTextOffert, CardInfoTitle, CardStyle } from './CardStyles'
import Button from '../../atoms/Button/Button'
import { RiShoppingCartLine } from "react-icons/ri";


const Card = ({id, productImg, category, name, priceNormal, priceDiscount, textOffert, featured}) => {
  return (
    <CardStyle id={id}>
      <CardImageContainer>
        <img src={productImg}/>
        {featured ? <CardInfoTag>Destacado</CardInfoTag> : ''}
      </CardImageContainer>
      <CardInfoContainer>
        <CardInfoCategories>{category}</CardInfoCategories>
        <CardInfoTitle>{name}</CardInfoTitle>
        <CardInfoPrice>
          <p className='--discount'>{priceDiscount}</p>
          <p className='--normal'>{priceNormal} {textOffert ? <CardInfoTextOffert>{textOffert}</CardInfoTextOffert> : ''}</p>
        </CardInfoPrice>
        <Button size='UltraSmall' color='primary'><RiShoppingCartLine/><span>Agregar</span></Button>
      </CardInfoContainer>
    </CardStyle>
  )
}

export default Card