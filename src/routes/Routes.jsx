import React from 'react'
import { BrowserRouter, Routes as ReactDOMRoutes, Route } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Home from '../pages/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'
import Products from '../pages/Products/Products'
import Contact from '../pages/Contact/Contact'
import { AuthProvider } from '../context/Context'
import ScrollToTop from '../functions/ScrollToTop'



const Routes = () => {
  return (
    <BrowserRouter>
        <AuthProvider>
          <ScrollToTop/>
            <Header/>
                <ReactDOMRoutes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/nosotros' element={<AboutUs/>}/>
                    <Route path='/productos' element={<Products/>}/>
                    <Route path='/contacto' element={<Contact/>}/>
                </ReactDOMRoutes>
            <Footer/>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default Routes