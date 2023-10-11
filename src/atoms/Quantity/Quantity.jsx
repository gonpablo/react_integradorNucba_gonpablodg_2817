import React from 'react'
import { QuantityButton, QuantityStyle } from './QuantityStyles'
import { useDispatch } from 'react-redux';
import { addCartProducts, removeCartProducts } from '../../redux/cartSlice/cartSlice';

const Quantity = ({
    disabled = '',
    id={id}, 
    productImg={productImg}, 
    name={name}, 
    priceNormal={priceNormal}, 
    priceDiscount={priceDiscount}, 
    quantity={quantity}
}) => {

  const dispatch = useDispatch();

  return (
    <QuantityStyle>
      {
        quantity === 1 ? disabled = true : disabled = false
      }

        <QuantityButton onClick={() => dispatch(removeCartProducts({id, productImg, name, priceNormal, priceDiscount, quantity}))} disabled={disabled}>-</QuantityButton>
        <input type="number" value={quantity} step="1" min="1" max="20" readOnly />
        <QuantityButton onClick={() => dispatch(addCartProducts({id, productImg, name, priceNormal, priceDiscount, quantity}))}>+</QuantityButton>
    </QuantityStyle>
  )
}

export default Quantity