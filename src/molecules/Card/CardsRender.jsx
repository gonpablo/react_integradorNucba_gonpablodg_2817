import React, { useContext, useEffect, useState } from 'react'
import Card from './Card';
import { useSelector } from 'react-redux'
import Context from '../../context/Context'


const CardsRender = () => {
    let products = useSelector((state) => state.products.products);
    const {selectedCategory} = useSelector((state) => state.categories);
    const [productsRender, setProductsRender] = useState([])
    const {INITIAL_LIMIT, limitProducts, setLimitProducts} = useContext(Context);


    useEffect(() => {
        setLimitProducts(INITIAL_LIMIT);
        if(selectedCategory != "todos") {
            const productsFilters = products.filter((item) => {
            return item.category === selectedCategory;
            })
            setProductsRender(productsFilters);  
        } else {
            const randomProducts = arr => [...arr].sort(() => Math.random() - 0.5);
            setProductsRender(randomProducts(products));
        }
    }, [selectedCategory]) 


    return (
        productsRender.map((items) => {
            if (limitProducts >= items.id || selectedCategory != "todos") {
                return <Card {...items} key={items.id} />
            }                       
        })
    )
}

export default CardsRender