import { useEffect, useRef } from "react";
import "./App.css";
import { Bio } from "./Components/Bio";
import {Carrossel} from "./Components/Carrossel";
import { Header } from "./Components/Header";
import { NewPost } from "./Components/NewPost";
import { Post } from "./Components/Post";
import { MenuProfileSidebar } from "./Components/ProfileSidebar";
import {Section} from "./Components/Section";
import "./reset.css";
import { Divider, Wrapper, BodyContainer } from "./styles";

function App() {
  const formRef = useRef();

  const comunidades = [
    {
      title: 'Eu Odeio Acordar Cedo',
      followers: 1234513,
      imgSrc: '/images/garfield.png'
    },{
      title: 'Elas@Computação',
      followers: 423,
      imgSrc: '/images/elas.png'
    },{
      title: 'Amo meu pet',
      followers: 700,
      imgSrc: '/images/pet.png'
    },{
      title: 'Sou opendever',
      followers: 400,
      imgSrc: '/images/pidevi.png'
    },
  ];

  const friends = [
    {
      title: 'Betinho Ju',
      followers: 4231,
      imgSrc: '/images/urso.jpeg'
    },{
      title: 'Guvvolvo',
      followers: 12,
      imgSrc: '/images/guvvolvo.png'
    },{
      title: 'Leandra Ubuntu',
      followers: 734,
      imgSrc: 'https://avatars.githubusercontent.com/u/50140771?v=4'
    },{
      title: 'JRobsonJr',
      followers: 1257,
      imgSrc: '/images/robson.jpg'
    },

  ]

  const posts = [
    {
      avatarSrc: "/images/guvvolvo.png",
      username: "Guvvolvo",
      title: "Form para garantir a camisa! 📑📝",
      fixed: false,
      children: (
        <>
          <p>
            Para garantir sua(s) camiseta(s) basta preencher o form:{" "}
            <strong>link do form</strong>
          </p>
          <p>
            🥳 Os posts abaixo mostram um pouco das estampas que nós
            desenvolvemos, dá uma ohadinha!🥳
          </p>
        </>
      ),
    },
    {
      avatarSrc: "https://avatars.githubusercontent.com/u/50140771?v=4",
      username: "Leandra Ubuntu",
      title: "Design 01 - Sua fardinha clássica de CC!",
      fixed: false,
      children: (
        <>
          <p ref={formRef}>Uma proposta mais clássica mas nada típica</p>
          <Carrossel imgSrcs={['/images/eu.gif', '/images/guvvolvo.png']}/>
        </>
      ),
    },
  ];

  useEffect(() => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Wrapper>
      <Header />
      <BodyContainer>
      <MenuProfileSidebar />
        <div>
          <Bio />
          <NewPost />
          {posts.map((post, index) => (
            <Post {...post} key={index} />
          ))}
        </div>
        <aside>
          <Divider/>
          <Section title='👨‍💻 meus amigos ' number={341} cards={friends} />
          <Section title='🤝 minhas comunidades' number={99} cards={comunidades} />
        </aside>
      </BodyContainer>
    </Wrapper>
  );
}

export default App;
