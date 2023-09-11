import React from 'react'
import Category from './Category'
import { useSelector } from 'react-redux'

const CategoriesRender = () => {
const {categories} = useSelector((state) => state.categories);

  return (
    categories.map((i) => {
        return <Category {...i} key={i.id} />
    })
  )
}

export default CategoriesRender