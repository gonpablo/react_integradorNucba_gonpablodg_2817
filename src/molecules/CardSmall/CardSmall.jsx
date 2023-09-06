import React from 'react'
import { CardSmallInfo, CardSmallInfoTop, CardSmallImage, CardSmallStyle, CardSmallInfoBottom, CardSmallInfoTitle, CardSmallInfoPrice } from './CardSmallStyles'
import { RiDeleteBin4Line } from "react-icons/ri";
import Quantity from '../../atoms/Quantity/Quantity';


const CardSmall = () => {

  const HeroImage = {
    backgroundImage: 'url(img_shop_1.jpg)',
  }

  return (
    <CardSmallStyle>
        <CardSmallImage style={HeroImage}/>
        <CardSmallInfo>
            <RiDeleteBin4Line/>
            <CardSmallInfoTop>
                <CardSmallInfoTitle>Fallout 4</CardSmallInfoTitle>
            </CardSmallInfoTop>
            <CardSmallInfoBottom>
              <CardSmallInfoPrice>
                  <p className='--discount'>$5.500</p>
                  <p className='--normal'><span>1x</span>$4.000</p>
              </CardSmallInfoPrice>
              <Quantity>10</Quantity>
            </CardSmallInfoBottom>
        </CardSmallInfo>
    </CardSmallStyle>
  )
}

export default CardSmall