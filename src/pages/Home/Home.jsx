import React, { useContext, useEffect } from 'react'
import Card from '../../molecules/Card/Card'
import Button from '../../atoms/Button/Button'
import Grid from '../../layout/Grid'
import Hero from '../../components/Hero/Hero'
import Section from '../../layout/Section'
import { HomeButtonsBottom, HomeButtonsContainer } from './HomeStyles'
import { useDispatch, useSelector } from 'react-redux'
import Context from '../../context/Context'
import Categories from '../../molecules/Categories/Categories'


function Home() {

  let products = useSelector((state) => state.products.products);
  const {categories} = useSelector((state) => state.categories);
  const {selectedCategory} = useSelector((state) => state.categories);
  const {limitProducts, setLimitProducts} = useContext(Context);

 

  /*
  useEffect(() => {
    setLimitProducts(limitProducts);
  },[selectCategory])  */

  return (
    <>
        <Hero/>
        <Section>
            <h2 className="--text-center --mb40">Juegos <strong>destacados</strong></h2>
            <HomeButtonsContainer className='--mb35'>
                { 
                  categories.map((i) => {
                      return <Categories {...i} key={i.id} />
                  })
                  
                }
            </HomeButtonsContainer>
            <Grid gridxl='4' gridmd='3' gridsm='2'>
                {
                  Object.entries(products).map((items) => {
                    return items.map((i) => {
                      if (limitProducts >= i.id) {
                        return <Card {...i} key={i.id} />
                      }
                    }).filter(selectedCategory === items.category)
                  })
                }
            </Grid>
            <HomeButtonsBottom>
              <Button color='primary'>Ver más</Button>
            </HomeButtonsBottom>
        </Section>
    </>
  )
}

export default Home
