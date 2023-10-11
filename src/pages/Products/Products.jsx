import React, { useContext, useState } from 'react'
import Layout from '../../layout/Section'
import HeaderPage from '../../molecules/HeaderPage/HeaderPage'
import { ProductsButtonsBottom, ProductsGrid } from './ProductsStyles'
import Grid from '../../layout/Grid'
import Filters from '../../molecules/Filters/Filters'
import { FiltersItemInner, FiltersItemTitle } from '../../molecules/Filters/FiltersStyles'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import Item from '../../layout/Item'
import CardsRender from '../../molecules/Card/CardsRender'
import Context from '../../context/Context'
import { useSelector } from 'react-redux'
import Button from '../../atoms/Button/Button'

const Products = () => {

const checkListEmpresa = ["ID Software", "Bethesda", "Capcom", "Konami", "Valve", "Sega"];
const checkListOtros = ["Un jugador", "Multijugador", "Cooperativo", "VR"];
const [checked, setChecked] = useState([]);
const {INITIAL_LIMIT, limitProducts, setLimitProducts} = useContext(Context);
const {selectedCategory} = useSelector((state) => state.categories);
const totalProducts = useSelector((state) => state.products.totalProducts);


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
                        <FiltersItemTitle>Empresa</FiltersItemTitle>
                        {
                            checkListEmpresa.map((item, id) => (
                                <Checkbox key={id} label={item} value={checked} onChange={handleChange}></Checkbox>
                            ))
                        }
                    </FiltersItemInner>

                    <FiltersItemInner>
                        <FiltersItemTitle>Otros</FiltersItemTitle>
                        {
                            checkListOtros.map((item, id) => (
                                <Checkbox key={id} label={item} value={checked} onChange={handleChange}></Checkbox>
                            ))
                        }
                    </FiltersItemInner>
                </Filters>
                <Item>
                    <p className='--mb35'>Se han encontrado estos juegos <strong>disponibles</strong></p>
                    <Grid gridxl='3' gridmd='3' gridsm='2'>
                        <CardsRender/>
                    </Grid>

                    <ProductsButtonsBottom>
                        {
                            selectedCategory === 'todos' && (
                            <Button color='primary' 
                                onClick={() => setLimitProducts((limit) => limit + INITIAL_LIMIT)}
                                hidden={totalProducts <= limitProducts}
                            >
                            Ver más
                            </Button>
                            )
                        }
                    </ProductsButtonsBottom>
                </Item>
            </ProductsGrid>
        </Layout>
    </>
  )
}

export default Products