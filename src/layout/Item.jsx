import React from 'react'
import { ItemStyle } from './ItemStyles'

const Item = ({
    children,
}) => {
  return (
    <ItemStyle>{children}</ItemStyle>
  )
}

export default Item