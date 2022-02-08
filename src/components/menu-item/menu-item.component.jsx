import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, TitleContainer, SubtitleContainer } from './menu-item.styles';

const MenuItem = ({ size, history, match, linkUrl, title, imageUrl }) => (
  <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer 
      className="background-image" 
      style={{
        backgroundImage: `url(${imageUrl})`
      }} 
    />
    <ContentContainer className="container">
      <TitleContainer>{title}</TitleContainer>
      <SubtitleContainer>Shop Now</SubtitleContainer>
    </ContentContainer>
  </MenuItemContainer>
)

export default withRouter(MenuItem);