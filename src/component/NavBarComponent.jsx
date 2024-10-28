import React, { useContext } from 'react'
import { Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import '../styles/NavBarComponent.css'

export const NavBarComponent = () => {

  const { shoppingList } = useContext(CartContext)

  return (
   <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink to='/'  className="navbar-brand">Changomás</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink  to='/' className="nav-link " aria-current="page">Productos</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink  to='/carrito' className="nav-link " aria-current="page">Productos</NavLink>
                    </li>
                </ul>
            <NavLink className='cart-icon' to='/carrito'>
                <Badge badgeContent={shoppingList.length} color="primary">
                    <ShoppingCartIcon />
                </Badge>
            </NavLink>
            </div>
        </div>
    </nav>
   </>
  )
}
