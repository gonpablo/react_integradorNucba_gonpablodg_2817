import React, { useContext } from 'react'
import { MenuCartBottom, MenuCartBottomButtons, MenuCartBottomTotal, MenuCartContainer, MenuCartContent, MenuCartStyle, MenuCartTop, MenuCartOverlay, MenuCartContentItem } from './MenuCartStyles'
import { RiArrowLeftLine } from "react-icons/ri";
import Context from '../../context/Context';
import Button from '../../atoms/Button/Button';
import CardSmall from '../CardSmall/CardSmall';


const MenuCart = () => {
    const {isActiveCart, openCart} = useContext(Context);

    return (
        <>
            <MenuCartStyle className={(isActiveCart) ? '--active' : '' }>
                <MenuCartContainer>
                    <MenuCartTop>
                        <RiArrowLeftLine onClick={() => openCart()} />
                        <h3>Tu carrito</h3>
                    </MenuCartTop>

                    <MenuCartContent>
                        <MenuCartContentItem>
                            <CardSmall/>
                        </MenuCartContentItem>
                        <MenuCartContentItem>
                            <CardSmall/>
                        </MenuCartContentItem>
                    </MenuCartContent>

                    <MenuCartBottom>
                        <MenuCartBottomTotal>
                            <p>Total <span>(2 items)</span></p>
                            <strong>$200.000</strong>
                        </MenuCartBottomTotal>
                        <MenuCartBottomButtons>
                            <Button color='secondary'>Borrar carrito</Button>
                            <Button color='primary'>Finalizar compra</Button>
                        </MenuCartBottomButtons>
                    </MenuCartBottom>
                </MenuCartContainer>
            </MenuCartStyle>
            <MenuCartOverlay className={(isActiveCart) ? '--active' : '' } />
        </>
    )
}

export default MenuCart