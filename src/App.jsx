/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' 
import './App.css' */

import Hero from "./components/Hero/Hero"
import { GridStyle } from "./layout/GridStyles"
import Layout from "./layout/Layout"
import Card from "./molecules/Card/Card"
import Header from "./components/Header/Header"
import { productsBD } from "./source_db/productsBD"
import Footer from "./components/Footer/Footer"
import Copyright from "./molecules/Copyright/Copyright"


function App() {

  return (
    <>
    <Header/>
    <Hero/>
      <Layout>
        <h2 className="--text-center --mb35">Nuestros <strong>productos</strong></h2>
        <GridStyle gridxl='4' gridmd='3' gridsm='2'>
        {
          productsBD.map((prod) => {
              return <Card key={prod.id} {...prod} />
          })
        }
        </GridStyle>
        
      </Layout>
    <Footer/>
    <Copyright/>
    </>
  )
}

export default App
