import React from 'react'
import { Holder, SectionStyle } from './SectionStyles'

const Section = ({
    children,
    topmargin = false,
}) => {
  return (
    <SectionStyle topmargin={+topmargin}>
        <Holder>
            {children}
        </Holder>
    </SectionStyle>
  )
}

export default Section