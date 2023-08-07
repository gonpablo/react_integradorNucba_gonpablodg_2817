/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' 
import './App.css' */

import Hero from "./components/Hero/Hero"
import Layout from "./layout/Layout"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Copyright from "./molecules/Copyright/Copyright"
import CardProducts from "./molecules/Card/CardProducts"


function App() {

  return (
    <>
    <Header/>
    <Hero/>
      <Layout>
        <CardProducts/>
      </Layout>
    <Footer/>
    <Copyright/>
    </>
  )
}

export default App
