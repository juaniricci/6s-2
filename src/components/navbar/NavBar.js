import React from 'react'
import LogoNavBar from '../../images/logo2.png'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <header>
                <a href="#">
                    <div className="menu-logo">
                        <img src={LogoNavBar} alt="logo" width="150px" />
                    </div>
                </a>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/productos">Pruductos</Link></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <div className="cart">
                    <box-icon name='shopping-bag'></box-icon>
                    <span className="item__total">0</span>
                </div>
        </header>
    )
}
