import React from 'react'
import NavbarLink from '../../atoms/NavbarLink/NavbarLink'
/*import { useSelector } from 'react-redux';*/

const NavbarPrimary = () => {
  /* const {categories} = useSelector((state) => state.categories);*/
  return (
    <>
     <ul>
      {
      /*
      categories.map((i) => {
      <NavbarLink backTo="/productos" key={i.id}>{i.name}</NavbarLink>
        })
      */
      }
      <NavbarLink backTo="/productos">Juegos</NavbarLink>
      <NavbarLink backTo="#" featured='true'>Ofertas</NavbarLink>
    </ul>
    <ul>
      <NavbarLink backTo="/nosotros" show="--desktop">Nosotros</NavbarLink>
      <NavbarLink backTo="/contacto" show="--desktop">Contacto</NavbarLink>
    </ul>
    </>
  )
}

export default NavbarPrimary