import React from 'react';
import { Routes, Route } from 'react-router';
import Payment from '../pages/Payment';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Footer from '../components/Footer';

const RouterRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<><Home /> <Footer /></>} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/product-details" element={<ProductDetails />} />
            </Routes>
        </>
    );
};

export default RouterRoutes;