import React from "react";
import { Container, ContentContainer, Title } from "./style";

export const BioIcon = ({ imgSrc, title, number }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ContentContainer>
        <img src={imgSrc} alt="its me rodrigo" />
        <span>{number}</span>
      </ContentContainer>
    </Container>
  );
};
