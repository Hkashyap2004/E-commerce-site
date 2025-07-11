import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
    const { cart, dispatch } = useContext(CartContext);

    const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return <h2>Your cart is empty.</h2>;
    }

    return (
        <div className="checkout-page">
            <h2>Your Cart</h2>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}>Remove</button>
                </div>
            ))}
            <div className="cart-total">
                <h3>Total: ₹{totalCost.toFixed(2)}</h3>
                <button onClick={() => alert('Proceeding to payment!')}>Checkout</button>
            </div>
        </div>
    );
};

export default CheckoutPage;