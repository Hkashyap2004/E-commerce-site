import React from 'react';
import { products } from '../data/product';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default HomePage;