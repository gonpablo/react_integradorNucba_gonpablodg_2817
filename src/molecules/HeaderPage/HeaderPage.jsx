import React from 'react'
import { HeaderPageHolder, HeaderPageItem, HeaderPageLinkBack, HeaderPageStyle } from './HeaderPageStyles'
import { RiArrowLeftLine } from "react-icons/ri";
import Breadcrumb from '../../atoms/Breadcrumb/Breadcrumb';

const HeaderPage = ({
    children,
    backTo,
}) => {
  return (
    <HeaderPageStyle>
        <HeaderPageHolder>
            <HeaderPageItem>
                <HeaderPageLinkBack to={backTo}><RiArrowLeftLine/></HeaderPageLinkBack>
                <h2>{children}</h2>
            </HeaderPageItem>

            <HeaderPageItem>
                <Breadcrumb backTo={backTo}>{children}</Breadcrumb>
            </HeaderPageItem>
        </HeaderPageHolder>
    </HeaderPageStyle>
  )
}

export default HeaderPage