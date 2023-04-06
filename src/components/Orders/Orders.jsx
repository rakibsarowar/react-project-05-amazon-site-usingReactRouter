import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id)=>{
        // we will use filter cz we need all data and skip just 1 -------------------------
        const remaining = cart.filter(product=> product.id !== id);
        setCart= (remaining);
        removeFromDb(id)
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
            <h1>Orders Page: {savedCart.length}</h1>
            {
                cart.map(Product=> <ReviewItem
                key={Product.id}
                Product={Product}
                handleRemoveFromCart={handleRemoveFromCart}
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