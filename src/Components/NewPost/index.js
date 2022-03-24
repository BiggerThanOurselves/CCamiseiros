import React from "react";
import { Container } from "./style";

export const NewPost = () => {
  return (
    <Container>
      <h3>Criar novo post</h3>
      <textarea rows="10" placeholder='O que você está pensando?'/>
      <button>postar</button>
   </Container>
  );
};
