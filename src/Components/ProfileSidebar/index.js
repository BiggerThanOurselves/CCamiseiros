import React from 'react';
import {
  Apps,
  Container,
  ContainerLogout,
  ContainerTitle,
  Description,
  Icon,
  IconText,
  ImageProfile,
  Line,
  Title,
} from './style';

const BASE_URL = 'http://alurakut.vercel.app/';

const icons = [
    { name: 'Perfil', icon: 'user' },
    { name: 'Recados', icon: 'book' },
    { name: 'Fotos', icon: 'camera' },
    { name: 'Vídeos', icon: 'video-camera' },
    { name: 'Depoimentos', icon: 'sun' },
  ];
  
  const iconsItems = [
    { name: 'Ajudar', icon: 'star' },
    { name: 'Configurações', icon: 'cool' },
  ];

export const MenuProfileSidebar = () => {
  return (
    <Container>
      <ImageProfile src='/images/logo.jpg' />
      <Line />
      <ContainerTitle>
        <Title>CCamiseiros</Title>
      </ContainerTitle>
      <Description>As camisetas mais lindas, Brasil</Description>
      <Line />
      <ProfileSidebarMenuDefault />
    </Container>
  );
};

export const ProfileSidebarMenuDefault = () => {
  return (
    <>
      {icons.map((icons, index) => {
        return (
          <IconText key={index}>
            <Icon src={`${BASE_URL}/icons/${icons.icon}.svg`} />
            {icons.name}
          </IconText>
        );
      })}
      <Line />
      <Apps>Apps</Apps>
      <IconText>
        <Icon src={`${BASE_URL}//icons/plus.svg`} />
        Adicionar apps
      </IconText>
      <Line />
      {iconsItems.map((icons, index) => {
        return (
          <IconText key={index}>
            <Icon src={`${BASE_URL}/icons/${icons.icon}.svg`} />
            {icons.name}
          </IconText>
        );
      })}
      <ContainerLogout>
        <IconText>
          <Icon src={`${BASE_URL}//icons/logout.svg`} />
          Sair
        </IconText>
      </ContainerLogout>
    </>
  );
};
