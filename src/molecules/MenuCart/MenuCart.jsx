import React, { useContext, useEffect } from 'react'
import { MenuCartBottom, MenuCartBottomButtons, MenuCartBottomTotal, MenuCartContainer, MenuCartContent, MenuCartStyle, MenuCartTop, MenuCartOverlay, MenuCartContentItem, MenuCartModalAlert, MenuCartLoading } from './MenuCartStyles'
import { RiArrowLeftLine } from "react-icons/ri";
import Context from '../../context/Context';
import Button from '../../atoms/Button/Button';
import CardSmall from '../CardSmall/CardSmall';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartProducts,  hiddenInfoText, toggleHiddenModalClear, toggleHiddenModalShop, updateCartTotalQty } from '../../redux/cartSlice/cartSlice';
import { formatPrice } from '../../functions/formatPrice';
import InfoText from '../../atoms/InfoText/InfoText';
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';


const MenuCart = () => {
    const {isActiveCart, openCart} = useContext(Context);
    const dispatch = useDispatch();
    const {cartProducts, infoText, totalPriceProducts, loading} = useSelector((state) => state.cart);
    const hiddenModalClear = useSelector((state) => state.cart.hiddenModalClear);
    const hiddenModalShop = useSelector((state) => state.cart.hiddenModalShop);
    const navigate = useNavigate();


    useEffect(() => {
        setTimeout(() => {
            dispatch(updateCartTotalQty())
        }, 2600); 
    });
    
    useEffect(() => {
        if(!loading) {
          setTimeout(() => {
                dispatch(hiddenInfoText())
          }, 2600);
        }
    }, [loading]);




    return (
        <>
            <MenuCartStyle className={(isActiveCart) ? '--active' : '' }>
                <MenuCartContainer>
                    <MenuCartTop>
                        <RiArrowLeftLine onClick={() => openCart()} />
                        <h3>Tu carrito</h3>
                    </MenuCartTop>

                    <MenuCartContent>
                        
                        {
                            cartProducts.length ? (
                                cartProducts.map((item) => {
                                return  <MenuCartContentItem key={item.id}>
                                            <CardSmall key={item.id} {...item} />
                                        </MenuCartContentItem>
                                })
                            ) : (
                                <h3>No hay juegos en el carrito</h3>
                            )
                        }
                        
                    </MenuCartContent>

                    <MenuCartBottom>
                        <MenuCartBottomTotal>
                            <p>Total <span>({cartProducts.length} items)</span></p>
                            <strong>{formatPrice(totalPriceProducts)}</strong>
                        </MenuCartBottomTotal>
                        <MenuCartBottomButtons>
                            <Button color={cartProducts.length ? 'secondary' : 'grey'} onClick={() => dispatch(toggleHiddenModalClear()) } disabled={!cartProducts.length}>Borrar carrito</Button>
                            <Button color={cartProducts.length ? 'primary' : 'grey'} onClick={() => dispatch(toggleHiddenModalShop()) } disabled={!cartProducts.length}>Finalizar compra</Button>
                        </MenuCartBottomButtons>
                    </MenuCartBottom>
                </MenuCartContainer>

                <Modal active={+hiddenModalClear} success={() => {dispatch(clearCartProducts()); dispatch(toggleHiddenModalClear())}} cancel={() => dispatch(toggleHiddenModalClear())}>¿Desea vaciar el carrito?</Modal>
                <Modal active={+hiddenModalShop} success={() => {navigate('/compra-exitosa'); dispatch(clearCartProducts()); dispatch(toggleHiddenModalShop()); openCart()}} cancel={() => dispatch(toggleHiddenModalShop())}>¿Desea realizar la compra?</Modal>

                <MenuCartLoading className={loading ? '--active' : '' }/>
            </MenuCartStyle>
            <MenuCartOverlay className={(isActiveCart) ? '--active' : '' } />

 
                {
                    infoText != "" && !loading ?
                    <InfoText>{infoText}</InfoText>
                    :
                    ''
                }
            
        </>
    )
}

export default MenuCart