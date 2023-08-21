import React from 'react'
import { Holder, SectionStyle } from './SectionStyles'

const Section = ({
    children,
    featured = false,
}) => {
  return (
    <SectionStyle className={featured}>
        <Holder>
            {children}
        </Holder>
    </SectionStyle>
  )
}

export default Section