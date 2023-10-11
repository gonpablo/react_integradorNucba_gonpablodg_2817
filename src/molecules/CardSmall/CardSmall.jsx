import React from 'react'
import { CardSmallInfo, CardSmallInfoTop, CardSmallImage, CardSmallStyle, CardSmallInfoBottom, CardSmallInfoTitle, CardSmallInfoPrice, CardSmallBtnDelete } from './CardSmallStyles'
import { RiDeleteBin4Line } from "react-icons/ri";
import Quantity from '../../atoms/Quantity/Quantity';
import { formatPrice } from '../../functions/formatPrice';
import { deleteCartProducts, toggleHiddenModalItem } from '../../redux/cartSlice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';


const CardSmall = ({id, productImg, name, priceNormal, priceDiscount, quantity}) => {

  const dispatch = useDispatch();
  const hiddenModalItem = useSelector((state) => state.cart.hiddenModalItem);

  const cardImage = {
    backgroundImage: 'url(' + productImg + ')',
  }

  return (
    <>
    <CardSmallStyle id={id}>
        <CardSmallImage style={cardImage}/>
        <CardSmallInfo>
            <CardSmallBtnDelete onClick={() => dispatch(toggleHiddenModalItem() )}><RiDeleteBin4Line/></CardSmallBtnDelete>
            <CardSmallInfoTop>
                <CardSmallInfoTitle>{name}</CardSmallInfoTitle>
            </CardSmallInfoTop>
            <CardSmallInfoBottom>
              <CardSmallInfoPrice>
                {priceDiscount ? <p className='--discount'>{formatPrice(priceNormal)}</p> : ''}
                <p className='--normal'><span>{quantity} x</span>{priceDiscount ? formatPrice(priceDiscount) : formatPrice(priceNormal)}</p>  
              </CardSmallInfoPrice>
              <Quantity id={id} productImg={productImg} name={name} priceNormal={priceNormal} priceDiscount={priceDiscount} quantity={quantity}></Quantity>
            </CardSmallInfoBottom>
        </CardSmallInfo>
    </CardSmallStyle>
    <Modal active={+hiddenModalItem} success={() => {dispatch(deleteCartProducts({id, productImg, name, priceNormal, priceDiscount, quantity})); dispatch(toggleHiddenModalItem())}} cancel={() => dispatch(toggleHiddenModalItem())}>¿Desea eliminar este producto?</Modal>
    </>
  )
}

export default CardSmall