import React from 'react'
import { SubmitStyle } from './SubmitStyles';

const Submit = ({
    id,
    children,
    color = '',
    disabled,
    loading,
}) => {

    return ( 
    <SubmitStyle id={id} disabled={disabled} className={color} loading={loading} type='submit'>{children}</SubmitStyle>
    )
}

export default Submit