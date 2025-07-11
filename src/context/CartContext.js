import React, { createContext, useReducer, useEffect } from 'react';

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex > -1) {
                const updatedState = [...state];
                updatedState[existingItemIndex].quantity += 1;
                return updatedState;
            }
            return [...state, { ...action.payload, quantity: 1 }];
        }
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload.id);
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};

const loadInitialState = () => {
    try {
        const localData = localStorage.getItem('cart');
        return localData ? JSON.parse(localData) : [];
    } catch (error) {
        console.error("Could not load cart from local storage", error);
        return [];
    }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, [], loadInitialState);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};