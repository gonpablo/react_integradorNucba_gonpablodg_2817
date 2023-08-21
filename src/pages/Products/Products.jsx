import React, { useState } from 'react'
import Layout from '../../layout/Section'
import HeaderPage from '../../molecules/HeaderPage/HeaderPage'
import { productsBD } from '../../source_db/productsBD'
import { ProductsGrid } from './ProductsStyles'
import Grid from '../../layout/Grid'
import Card from '../../molecules/Card/Card'
import Filters from '../../molecules/Filters/Filters'
import { FiltersItemInner, FiltersItemInnerLink, FiltersItemTitle } from '../../molecules/Filters/FiltersStyles'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import Item from '../../layout/Item'

const Products = () => {

const checkList = ["ID Software", "Bethesda", "Capcom", "Konami", "Valve", "Sega"];

const [checked, setChecked] = useState([]);

const handleChange = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  return (
    <>
        <HeaderPage backTo="/">Juegos</HeaderPage>
        <Layout>
            <ProductsGrid>
                <Filters>
                    
                    <FiltersItemInner>
                        <FiltersItemTitle>Subcategorias</FiltersItemTitle>
                        <FiltersItemInnerLink>Mundo abierto</FiltersItemInnerLink>
                        <FiltersItemInnerLink>Plataformas</FiltersItemInnerLink>
                        <FiltersItemInnerLink>Deportes</FiltersItemInnerLink>
                        <FiltersItemInnerLink>FPS</FiltersItemInnerLink>
                        <FiltersItemInnerLink>Aventura</FiltersItemInnerLink>
                        <FiltersItemInnerLink>Terror</FiltersItemInnerLink>
                    </FiltersItemInner>
                    <FiltersItemInner>
                        <FiltersItemTitle>Empresa</FiltersItemTitle>
                        {
                            checkList.map((item, id) => (
                                <Checkbox key={id} label={item} value={checked} onChange={handleChange}></Checkbox>
                            ))
                        }
                    </FiltersItemInner>
                </Filters>
                <Item>
                    <p className='--mb35'>Se han encontrado <strong>16 juegos</strong> disponibles</p>
                    <Grid gridxl='3' gridmd='3' gridsm='2'>
                    {
                        productsBD.map((prod) => {
                            return <Card key={prod.id } {...prod} />  
                        })
                    }
                    </Grid>
                </Item>
            </ProductsGrid>
        </Layout>
    </>
  )
}

export default Products