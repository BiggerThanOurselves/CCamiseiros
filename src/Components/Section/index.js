import React from "react";
import { Card } from "./Card";
import { Container, Title, CardSection, All } from "./style";

export const Section = ({ cards, title, number }) => {
  return (
    <Container>
      <Title>{title}<strong> ({number})</strong>
      </Title>
      <CardSection>
        {cards.map((card, index) => (
          <Card {...card} key={index} />
        ))}
      </CardSection>
      <All>ver todos</All>
    </Container>
  );
};

Section.defaultProps = {
  cards: ["oi", "tchau", "cu", 'vacas'],
};
