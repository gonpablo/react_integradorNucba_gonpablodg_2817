import React from 'react'
import { GridStyle } from './GridStyles'

const Grid = ({
    children,
    gridxl = '1',
    gridmd = '1',
    gridsm = '1',
    big = '',
}) => {
  return (
    <GridStyle 
        gridxl={gridxl}
        gridmd={gridmd}
        gridsm={gridsm}
        big={big}
    >
        {children}
    </GridStyle> 
  )
}

export default Grid