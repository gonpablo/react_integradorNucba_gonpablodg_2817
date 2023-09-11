import React from 'react'
import { ModalBotton, ModalInner, ModalStyle } from './ModalStyles'
import Button from '../../atoms/Button/Button'
import { RiCloseFill } from "react-icons/ri";

const Modal = ({
    children,
    disabled = false,
}) => {
  return (
   <ModalStyle disabled={disabled}>
        <ModalInner disabled={disabled}>
            <RiCloseFill/>
            <h3 className='--mb25'>{children}</h3>
            <ModalBotton>
                <Button color='primary'>Si</Button>
                <Button color='secondary'>No</Button>
            </ModalBotton>
        </ModalInner>
    </ModalStyle>
  )
}

export default Modal