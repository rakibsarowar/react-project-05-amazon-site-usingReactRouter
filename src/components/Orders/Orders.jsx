import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, getCart] = useState(savedCart)
    // console.log(cart)
    return (
        <div className='shop-container'>
            <div className='review-container'>
            <h1>Orders Page: {savedCart.length}</h1>
            {
                cart.map(Product=> <ReviewItem
                key={Product.id}
                Product={Product}
                ></ReviewItem>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;