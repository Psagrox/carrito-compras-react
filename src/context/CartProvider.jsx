import React, { act, useReducer } from 'react'
import { CartContext } from "./CartContext.js";


export const CartProvider = ({children}) => {
    
    const initialState = []

    const cartReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CART] Add Product':
                return [...state, action.payload];
            case '[CART] Remove Product':
                return state.filter(product => product.id !== action.payload );
            case '[CART] Increment':
                return state.map( product => {
                    const cant = product.quantity + 1
                    if(product.id === action.payload) return {...product, quantity: cant}
                    return product
                })
            case '[CART] Decrease':
                return state.map( product => {
                    const cant = product.quantity - 1 
                    if(product.id === action.payload && product.quantity > 1) return {...product, quantity: cant}
                    return product
                })
            default:
                return state
        }
    }
    
    const [shoppingList, dispatch] = useReducer(cartReducer, initialState)

    const addProduct = (product) => {
        product.quantity = 1
        const action = {
            type: '[CART] Add Product',
            payload: product,
        }
        dispatch(action)
    
    }

    const removeProduct = (id) => {
        const action = {
            type: '[CART] Remove Product',
            payload: id,
        }
        dispatch(action)
    }

    const increment = (id) => {
        const action = {
            type: '[CART] Increment',
            payload: id,
        }
        dispatch(action)
    }

    const decrease = (id) => {
        const action = {
            type: '[CART] Decrease',
            payload: id,
        }
        dispatch(action)
    }

    
  return (
    <CartContext.Provider value={{ shoppingList, addProduct, removeProduct, increment, decrease }}>
        {children}
    </CartContext.Provider>
  )
}
