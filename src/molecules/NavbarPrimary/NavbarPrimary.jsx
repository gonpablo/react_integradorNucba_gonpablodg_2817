import React from 'react'
import NavbarLink from '../../atoms/NavbarLink/NavbarLink'

const NavbarPrimary = () => {
  return (
    <>
     <ul>
        <NavbarLink backTo="/productos">Mundo abierto</NavbarLink>
        <NavbarLink backTo="/productos">Plataformas</NavbarLink>
        <NavbarLink backTo="/productos">Deportes</NavbarLink>
        <NavbarLink backTo="/productos">FPS</NavbarLink>
        <NavbarLink backTo="/productos">Aventura</NavbarLink>
        <NavbarLink backTo="/productos">Terror</NavbarLink>
        <NavbarLink backTo="/productos" featured='true'>Ofertas</NavbarLink>
    </ul>
    </>
  )
}

export default NavbarPrimary