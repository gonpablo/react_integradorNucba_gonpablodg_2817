import React from 'react'
import { FiltersBottom, FiltersContent, FiltersItem, FiltersStyle } from './FiltersStyles'
import Button from '../../atoms/Button/Button'

const Filters = ({
    children,
}) => {
  return (
    <FiltersStyle>
        <FiltersContent>
            <FiltersItem>
                {children}
            </FiltersItem>
        </FiltersContent>

        <FiltersBottom>
            <Button color='primary'>Aplicar filtros</Button>
        </FiltersBottom>
    </FiltersStyle>
  )
}

export default Filters