import React from 'react';
import {Container, ContentContainer, Title} from './style';

export const BioIcon = ({ imgSrc, title, number }) => {
  console.log(title);
  return (
    <Container>
      <Title>{title}</Title>
      <ContentContainer>
        <img src={imgSrc}/>
        <span>{number}</span>
      </ContentContainer>

    </Container>
    
  )
}