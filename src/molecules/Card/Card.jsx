import React from 'react'
import { CardImageContainer, CardInfoCategories, CardInfoContainer, CardInfoPrice, CardInfoTag, CardInfoTextOffert, CardInfoTitle, CardStyle } from './CardStyles'
import Button from '../../atoms/Button/Button'
import { RiShoppingCartLine } from "react-icons/ri";
import { formatPrice } from '../../functions/formatPrice';


const Card = ({id, productImg, category, categoryName, name, priceNormal, priceDiscount, textOffert, featured}) => {
  return (
    <CardStyle id={id} name={category}>
      <CardImageContainer>
        <img src={productImg}/>
        {featured ? <CardInfoTag>Destacado</CardInfoTag> : ''}
      </CardImageContainer>
      <CardInfoContainer>
        <CardInfoCategories>{categoryName}</CardInfoCategories>
        <CardInfoTitle>{name}</CardInfoTitle>
        <CardInfoPrice>
          {priceDiscount ? <p className='--discount'>{formatPrice(priceDiscount)}</p> : ''}
          <p className='--normal'>{formatPrice(priceNormal)} {textOffert ? <CardInfoTextOffert>{textOffert}</CardInfoTextOffert> : ''}</p>
        </CardInfoPrice>
        <Button size='UltraSmall' color='primary'><RiShoppingCartLine/><span>Agregar</span></Button>
      </CardInfoContainer>
    </CardStyle>
  )
}

export default Card