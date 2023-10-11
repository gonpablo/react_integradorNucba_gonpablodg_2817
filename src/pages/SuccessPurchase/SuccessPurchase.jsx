import React from 'react'
import { SuccessPurchaseHeader, SuccessPurchaseHeaderHolder, SuccessPurchaseItem, SuccessPurchaseStyle } from './SuccessPurchaseStyles'
import { RiEmotionHappyLine } from "react-icons/ri";
import Section from '../../layout/Section';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button/Button';

const SuccessPurchase = () => {

    const navigate = useNavigate();

    return (
        <>
            <SuccessPurchaseStyle>
                <SuccessPurchaseHeader>
                    <SuccessPurchaseHeaderHolder>
                        <RiEmotionHappyLine className='--mb15'/>
                        <h1 className='--mb9'>Gracias por tu compra</h1>
                        <p>El pago se ha realizado <strong>con éxito</strong></p>
                    </SuccessPurchaseHeaderHolder>
                </SuccessPurchaseHeader>
                <Section topmargin>
                    <SuccessPurchaseItem>
                        <p className='--mb20'>Revisa tu <strong>casilla de correo</strong> para ver el <strong>comprobante de tu compra</strong></p>
                        <Button color='primary' onClick={() => navigate('/') }>Volver al inicio</Button>
                    </SuccessPurchaseItem>
                </Section>
            </SuccessPurchaseStyle>

        </>
    )
}

export default SuccessPurchase