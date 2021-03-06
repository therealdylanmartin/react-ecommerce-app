import styled, { css } from 'styled-components';

const itemPropertyStyles = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainerContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const NameContainer = styled.div`
  ${itemPropertyStyles}
`;

export const QuantityContainer = styled.div`
  display: flex;
  ${itemPropertyStyles}
`;

export const ArrowContainer = styled.span`
  cursor: pointer;
`;

export const ValueContainer = styled.span`
  margin: 0 8px;
`;

export const PriceContainer = styled.div`
  ${itemPropertyStyles}
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;