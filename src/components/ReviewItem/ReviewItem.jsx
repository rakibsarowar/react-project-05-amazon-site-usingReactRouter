import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({Product}) => {
    console.log(Product)
    const {id, img, price, name, quantity}=Product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>price <span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button className='btn-delete'>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}/>
            </button>
        </div>
    );
};

export default ReviewItem;