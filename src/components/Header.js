import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="app-header">
            <Link to="/" className="header-title"><h1>B-Tech Gadgets</h1></Link>
            <Link to="/checkout" className="cart-icon-link">
                <span role="img" aria-label="cart">🛒</span>
                <span className="cart-count">{totalItems}</span>
            </Link>
        </header>
    );
};

export default Header;