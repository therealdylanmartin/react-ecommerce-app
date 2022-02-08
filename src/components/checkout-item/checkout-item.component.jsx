import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart.actions';

import { CheckoutItemContainer, ImageContainerContainer, NameContainer, QuantityContainer, ArrowContainer, ValueContainer, PriceContainer, RemoveButtonContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, removeItem, addItem, clearItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  return(
    <CheckoutItemContainer>
      <ImageContainerContainer>
        <img src={imageUrl} alt="" />
      </ImageContainerContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer onClick={() => removeItem(cartItem)}>&#10094;</ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={() => addItem(cartItem)}>&#10095;</ArrowContainer>
      </QuantityContainer>
      <PriceContainer>${price}</PriceContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)} role="button" aria-label="Remove item">&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);