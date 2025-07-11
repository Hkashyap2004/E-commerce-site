import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/product';
import { CartContext } from '../context/CartContext';

const ProductDetailPage = () => {
    const { id } = useParams();
    const { dispatch } = useContext(CartContext);
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div>
                <h2>Product not found!</h2>
                <Link to="/">Go back to Home</Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_ITEM', payload: product });
        alert(`${product.name} has been added to the cart!`);
    };

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className="price">₹{product.price.toFixed(2)}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetailPage;