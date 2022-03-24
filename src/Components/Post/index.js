import React from "react";
import {
  Container,
  Header,
  Body,
} from "./style";

export const Post = ({ children, avatarSrc, username, title}) => {
  return (
    <Container>
      <Header>
        <img src={avatarSrc} alt='avatar icon'/>
        <div>
          <span>{username}</span>
          <h4>{title}</h4>
        </div>
      </Header>
      <Body>
        {children}
      </Body>
      <button>responder</button>
   </Container>
  );
};
