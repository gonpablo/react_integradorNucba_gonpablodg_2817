import React from 'react'
import { SocialStyle } from './SocialIconsStyles'


const SocialIcons = ({
  children,
  url,
}) => {
  return (
      <SocialStyle href={url}>{children}</SocialStyle>
  )
}

export default SocialIcons