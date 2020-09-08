import React from 'react'
import './button.scss'
import{ ButtonStyledComponent} from './button.style'

const Button = ({children, ...props}) => {
    return (
        <ButtonStyledComponent {...props}>
        {children}
        </ButtonStyledComponent>
    )
}

export default Button