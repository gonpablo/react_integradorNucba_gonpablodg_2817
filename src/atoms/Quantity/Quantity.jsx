import React from 'react'
import { QuantityButton, QuantityStyle } from './QuantityStyles'

const Quantity = ({
    /*disabled = '',*/
    children,
}) => {
  return (
    <QuantityStyle>
        <QuantityButton>-</QuantityButton>
        <input type="number" defaultValue={children} step="1" min="1" max="20" readOnly />
        <QuantityButton>+</QuantityButton>
    </QuantityStyle>
  )
}

export default Quantity