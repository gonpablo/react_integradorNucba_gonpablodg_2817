import React from 'react'
import { BreadcrumbLink, BreadcrumbStyle } from './BreadcrumbStyles'
import { RiHome4Line } from "react-icons/ri";

const Breadcrumb = ({
    children,
    backTo,
}) => {
  return (
    <BreadcrumbStyle>
        <li><BreadcrumbLink to={backTo}><RiHome4Line/>Home</BreadcrumbLink></li>
        <li><BreadcrumbLink to="#">{children}</BreadcrumbLink></li>
    </BreadcrumbStyle>
  )
}

export default Breadcrumb