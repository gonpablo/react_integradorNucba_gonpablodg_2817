import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categoriesSlice/categoriesSlice';
import { ButtonCategories } from './CategoryStyles';



const Category = ({id, name, category}) => {

    const dispatch = useDispatch();
    const {selectedCategory} = useSelector((state) => state.categories);
    return (
        <>
            <ButtonCategories 
                onClick={() => dispatch(selectCategory(category))} 
                size='Small' 
                className={category === selectedCategory ? 'primary' : 'grey'}
                disabled={category === selectedCategory ? true : false}
                key={id}>
                {name}
            </ButtonCategories>
        </>
    )
}

export default Category