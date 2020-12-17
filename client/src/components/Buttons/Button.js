import React from 'react'
import './Button.css'


export const Button =({
    children,type,onClick,buttonStyle,buttonSize,buttonColor
}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle)?
    buttonStyle:STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize)?
    buttonSize:SIZES[0]
    const checkButtonColor = COLOR.includes(buttonColor)?
    buttonColor:null
    console.log(checkButtonStyle)
    return (
        <button className = {`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} 
        onClick={onClick} 
        type={type}>
            {children}
        </button>
    )
}