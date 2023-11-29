import './NavBar.css'
import React from 'react';
import CartWidget from "../CartWidget/CartWidget"
import logo from './assets/logo.png'
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="row header">
            <Link to='/' className="col-2 mt-3">
                <img className="logo" src={logo} alt="logo"/>
            </Link>

            <div className="col-8 mt-3 Categories">
                <NavLink to='/category/paracultivo' className={({ isActive }) => isActive ? 'ActiveNavLink' : 'NavLink'}>Cultivos</NavLink>  
                <NavLink to='/category/parafernalia' className={({ isActive }) => isActive ? 'ActiveNavLink' : 'NavLink'}>Parafernalia</NavLink>
                <NavLink to='/category/indumentaria' className={({ isActive }) => isActive ? 'ActiveNavLink' : 'NavLink'}>Indumentaria</NavLink>
            </div>

            <CartWidget />

        </nav>
    );
}

export default NavBar