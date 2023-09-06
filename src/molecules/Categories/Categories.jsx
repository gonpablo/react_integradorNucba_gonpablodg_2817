import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categoriesSlice/categoriesSlice';
import { ButtonCategories } from './CategoriesStyles';



const Categories = ({id, title, category}) => {

    const dispatch = useDispatch();
    const {selectedCategory} = useSelector((state) => state.categories);
    return (
        <>
            <ButtonCategories 
                onClick={() => dispatch(selectCategory(category))} 
                size='Small' 
                color={category === selectedCategory}
                key={id}>
                {title}
            </ButtonCategories>
        </>
    )
}

export default Categories