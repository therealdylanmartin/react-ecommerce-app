import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  max-height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  max-height: 230px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-bottom: 10px;
`;

export const CartMessageContainer = styled.span`
  font-style: italic;
  margin-bottom: 10px;
  text-align: center;
`;