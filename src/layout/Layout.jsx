import React from 'react'
import { Holder, Section } from './LayoutStyles'

const Layout = ({
    children,
    featured = false,
}) => {
  return (
    <Section className={featured}>
        <Holder>
            {children}
        </Holder>
    </Section>
  )
}

export default Layout