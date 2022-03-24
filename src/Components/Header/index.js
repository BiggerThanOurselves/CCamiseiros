import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { OrkutLogo } from "../../assets/orkut.js";
import {
  Container,
  Wrapper,
  Out,
  LogoContainer,
  InfoContainer,
  NavContainer,
  Email,
  SearchInput,
  InputContainer,
  MenuBurguer,
} from "./style.js";

export const Header = () => {
  const [inputActive, setInputActive] = useState(false);

  return (
    <Wrapper>
      <Container>
        <NavContainer>
          <LogoContainer>
            <OrkutLogo />
          </LogoContainer>
          <nav>
            <ul>
              <li>Início</li>
              <li>Perfil</li>
              <li>Páginas de recados</li>
              <li>Amigos</li>
              <li>Comunidades</li>
            </ul>
          </nav>
        </NavContainer>
        <InfoContainer>
          <Email>equipe@gmail.ccamiseiros.com</Email>
          <Out>Sair</Out>
          <InputContainer>
            <SearchInput active={inputActive} placeholder="pesquisa do cckut" />
            <SearchOutlined onClick={() => setInputActive(!inputActive)} />
          </InputContainer>
          <MenuBurguer />
        </InfoContainer>
      </Container>
    </Wrapper>
  );
};
