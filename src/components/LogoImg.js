import React from 'react'
import logo from '../images/logo.png'

function LogoImg() {
    return ( <
        img src = { logo }
        style = {
            { marginLeft: "-100%" }
        }
        alt = "logo" / >
    )
}

export default LogoImg