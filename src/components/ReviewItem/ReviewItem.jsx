import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({Product}) => {
    console.log(Product)
    const {id, img, price, name, quantity}=Product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
        </div>
    );
};

export default ReviewItem;