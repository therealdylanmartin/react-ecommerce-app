import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, removeItem, addItem, clearItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  return(
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItem(cartItem)}>&#10095;</span>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button" onClick={() => clearItem(cartItem)} aria-label="Remove item">&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);