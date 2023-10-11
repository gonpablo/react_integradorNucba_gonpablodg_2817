import React from 'react'
import { ModalStyle } from './ModalStyles'
import Button from '../../atoms/Button/Button'


const Modal = ({
    children,
    active,
    success,
    cancel,
}) => {



  return (
   <ModalStyle className={!active ? '--active' : ''}>
        <h3 className='--mb25'>{children}</h3>
        <div>
            <Button size='Small' color='secondary' onClick={cancel}>No</Button>
            <Button size='Small' color='primary' onClick={success}>Si</Button>
        </div>
    </ModalStyle>
  )
}

export default Modal