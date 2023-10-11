import React, { useContext } from 'react'
import { CardImageContainer, CardInfoCategories, CardInfoContainer, CardInfoPrice, CardInfoTag, CardInfoTextOffert, CardInfoTitle, CardStyle } from './CardStyles'
import Button from '../../atoms/Button/Button'
import { RiShoppingCartLine } from "react-icons/ri";
import { formatPrice } from '../../functions/formatPrice';
import { useDispatch } from 'react-redux';
import { addCartProducts } from '../../redux/cartSlice/cartSlice';
import Context from '../../context/Context';


const Card = ({id, productImg, category, categoryName, name, priceNormal, priceDiscount, textOffert, featured}) => {

  const dispatch = useDispatch();
  const {openCart} = useContext(Context);

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
          {priceDiscount ? <p className='--discount'>{formatPrice(priceNormal)}</p> : ''}
          <p className='--normal'>{priceDiscount ? formatPrice(priceDiscount) : formatPrice(priceNormal)} {textOffert ? <CardInfoTextOffert>{textOffert}</CardInfoTextOffert> : ''}</p>
        </CardInfoPrice>
        <Button size='UltraSmall' color='primary' onClick={() => { dispatch(addCartProducts({id, productImg, category, categoryName, name, priceNormal, priceDiscount})); openCart()}}><RiShoppingCartLine/></Button>
      </CardInfoContainer>
    </CardStyle>
  )
}

export default Card