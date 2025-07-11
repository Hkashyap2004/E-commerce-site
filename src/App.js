import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
    return (
        <CartProvider>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/product/:id" element={<ProductDetailPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                    </Routes>
                </main>
            </Router>
        </CartProvider>
    );
}

export default App;