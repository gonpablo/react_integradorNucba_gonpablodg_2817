import React from 'react'
import { SocialStyle } from './SocialIconsStyles'


const SocialIcons = ({
  children,
  backTo,
  color = '',
}) => {
  return (
      <SocialStyle color={color} to={backTo}>{children}</SocialStyle>
  )
}

export default SocialIcons
