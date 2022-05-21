import React from "react";
import "../styles/Header/header.css"

export default function Header(){
    return(
        <header>
            <img src={require('../images/user.jpg')} alt="image not found" id="logo"/>
        </header>
    )
}