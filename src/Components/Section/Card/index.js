import React from "react";
import {
  Container,
  Title,
} from "./style";

export const Card = ({ imgSrc, title, followers }) => {
  return (
    <Container>
      <img src={imgSrc} alt='Set the background' />
      <Title>{title}</Title>
      <span>({followers})</span>
   </Container>
  );
};

Card.defaultProps = {
  imgSrc: '/images/eu.gif',
  title: 'rodrigoec',
  followers: 12,
}
