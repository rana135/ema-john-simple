import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
   console.log(props);
    const {img, name, price, seller, ratings} =props.product
    
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className="product-info">
            <h2 className='product-name'>{name}</h2>
            <p><strong>Price:-</strong> {price}</p>
            <p><small><strong>Manufacturer:-</strong>{price}</small></p>
            <p><small><strong>Seller:-</strong>{seller}</small></p>
            <p><small><strong>Rating:-</strong> {ratings}</small></p>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-field'>
                Add to Cart
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;