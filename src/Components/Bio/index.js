import React from "react";
import { BioIcon } from "./BioIcon";
import {
  SectionTitle,
  Text,
  Warning,
  Notification,
  BodyContainer,
  Container,
  StatusContainer,
} from "./style";

export const Bio = () => {
  const status = [
    {
      title: "recado",
      imgSrc: "https://alurakut.vercel.app/icons/book.svg",
      number: 12,
    },
    {
      title: "vídeos",
      imgSrc: "https://alurakut.vercel.app/icons/video-camera.svg",
      number: 12,
    },
    {
      title: "fotos",
      imgSrc: "https://alurakut.vercel.app/icons/camera.svg",
      number: 366,
    },
    {
      title: "fãs",
      imgSrc: "https://alurakut.vercel.app/icons/star.svg",
      number: 49,
    },
    {
      title: "mensagens",
      imgSrc: "https://alurakut.vercel.app/icons/email.svg",
      number: 999,
    },
  ];

  return (
    <Container>
      <h1>Bem-vindo(a), CCamiseiros!</h1>
      <BodyContainer>
        <Text>
          <strong>Perfil criado em:</strong> 06 de março de 2022
        </Text>
        <Text>
          <strong>Visitantes mais antigos:</strong> LeandraOS, Haduken27,
          Guvolvo
        </Text>
        <Text>
          <strong>Azar de hoje:</strong> Bater o dedo mindinho na quina do móvel
        </Text>
        <SectionTitle>Sobre mim</SectionTitle>
        <p>
          Oii, nós somos a equipe do ccamiseiros e criamos esse site como uma
          homenagem ao falecido Orkut e aos anos 2000! Espero que você goste das
          camisetas que criamos pro curso. Espero que você goste das camisetas,{" "}
          <Warning>o post fixado é o link do forms.</Warning>
        </p>
        <img src="/images/eu.gif" alt='eu'/>
        <p>
          <strong>
            <i>Se liga nos posts!</i>
          </strong>
        </p>
        <Notification>
          <strong>Contato:</strong>
          <p>Caso queira nos contatar estamos disponíveis em:</p>
          <ul>
            <li>rodrigoecavalcanti@gmail.com</li>
            <li>leandra.silva@ccc.ufcg.edu.br</li>
          </ul>
        </Notification>
      </BodyContainer>
      <StatusContainer>
        {status.map((stat) => (
          <BioIcon {...stat} />
        ))}
      </StatusContainer>
    </Container>
  );
};
