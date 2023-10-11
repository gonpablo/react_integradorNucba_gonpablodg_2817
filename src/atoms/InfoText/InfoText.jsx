import React from 'react'
import { InfoTextStyle } from './InfoTextStyles'
import { RiShoppingBasketLine } from "react-icons/ri";

const InfoText = ({
    children,
}) => {

  return (
    <InfoTextStyle><RiShoppingBasketLine/>{children}</InfoTextStyle>
  )
}

export default InfoText