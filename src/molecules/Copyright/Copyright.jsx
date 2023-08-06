import React from 'react'
import { CopyrightItem, CopyrightStyle, CopyrightText } from './CopyrightStyles'
import { RiHeartFill } from "react-icons/ri"

const Copyright = () => {
  return (
    <CopyrightStyle>
        <CopyrightItem>
            <CopyrightText>Sitio realizado con <RiHeartFill/> por <a href="#"><img src="logo-trinodo.png"/></a></CopyrightText>
        </CopyrightItem>
    </CopyrightStyle>
  )
}

export default Copyright