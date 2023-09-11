import Hero from '../../components/Hero/Hero'
import Section from '../../layout/Section'
import { HomeButtonsBottom, HomeButtonsContainer } from './HomeStyles'
import CategoriesRender from '../../molecules/Category/CategoriesRender'
import CardsRender from '../../molecules/Card/CardsRender'
import Modal from '../../molecules/Modal/Modal'
import Button from '../../atoms/Button/Button'
import { useContext } from 'react'
import Context from '../../context/Context'
import { useSelector } from 'react-redux'
import Grid from '../../layout/Grid'



function Home() {

  const {INITIAL_LIMIT, limitProducts, setLimitProducts} = useContext(Context);
  const {selectedCategory} = useSelector((state) => state.categories);
  const totalProducts = useSelector((state) => state.products.totalProducts);

  return (
    <>
        <Hero/>
        <Section>
            <h2 className="--text-center --mb40">Juegos <strong>destacados</strong></h2>
            <HomeButtonsContainer className='--mb35'>
              <CategoriesRender/>
            </HomeButtonsContainer>
            <Grid gridxl='4' gridmd='3' gridsm='2'>  
              <CardsRender/>
            </Grid>

            <HomeButtonsBottom>
            {
                selectedCategory === 'todos' && (
                <Button color='primary' 
                    onClick={() => setLimitProducts((limit) => limit + INITIAL_LIMIT)}
                    disabled={totalProducts <= limitProducts}
                >
                Ver más
                </Button>
                )
            }
            </HomeButtonsBottom>
        </Section>
        <Modal>Desea eliminar estos productos</Modal>
    </>
  )
}

export default Home
