import React from "react";
import {Apps, Container, ContainerLogout, ContainerTitle, Description, ProfileSidebarMenu, Title } from "./style";

const BASE_URL = 'http://alurakut.vercel.app/';

export const AlurakutMenuProfileSidebar = () => {
    return (
      <div className="alurakutMenuProfileSidebar">
        <Container>
          <img src={`https://github.com/LeandraOS.png`} style={{ borderRadius: '8px' , marginTop: '16px'}}/>
          <hr />
          <ContainerTitle>
            <Title>CCamiseiros</Title>
          </ContainerTitle>
          <Description>As camisetas mais lindas, Brasil</Description>
          <hr />
          <AlurakutProfileSidebarMenuDefault />
        </Container>
      </div>
    )
  }

  export const AlurakutProfileSidebarMenuDefault = () => {
    return (
      <ProfileSidebarMenu>
        <nav>
          <a href="/">
            <img src={`${BASE_URL}/icons/user.svg`} />
              Perfil
            </a>
          <a href="/">
            <img src={`${BASE_URL}/icons/book.svg`} />
              Recados
            </a>
          <a href="/">
            <img src={`${BASE_URL}/icons/camera.svg`} />
              Fotos
            </a>
            <a href="/">
            <img src={`${BASE_URL}//icons/video-camera.svg`} />
              Vídeos
            </a>
          <a href="/">
            <img src={`${BASE_URL}/icons/sun.svg`} />
              Depoimentos
            </a>
        </nav>
        <hr />
        <nav>
            <Apps>Apps</Apps>
            
          <a href="/">
            <img src={`${BASE_URL}/icons/plus.svg`} />
              Adicionar apps
            </a>
            <hr/>
            <a href="/">
            <img src={`${BASE_URL}//icons/star.svg`} />
            Ajudar
            </a>
            <a href="/">
            <img src={`${BASE_URL}//icons/cool.svg`} />
              Configurações
            </a>
            <ContainerLogout>
            <a href="/">
            <img src={`${BASE_URL}//icons/logout.svg`} />
              Sair
            </a>
            </ContainerLogout>   
        </nav>
      </ProfileSidebarMenu>
    )
  }

  