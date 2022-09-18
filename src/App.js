import { useEffect, useRef } from "react";
import "./App.css";
import { Bio } from "./Components/Bio";
import { Carrossel } from "./Components/Carrossel";
import { Header } from "./Components/Header";
import { NewPost } from "./Components/NewPost";
import { Post } from "./Components/Post";
import { MenuProfileSidebar } from "./Components/ProfileSidebar";
import { Section } from "./Components/Section";
import "./reset.css";
import { Divider, Wrapper, BodyContainer } from "./styles";

function App() {
  const formRef = useRef();

  const comunidades = [
    {
      title: "Eu Odeio Acordar Cedo",
      followers: 1234513,
      imgSrc: "/images/garfield.png",
    },
    {
      title: "Elas@Computação",
      followers: 423,
      imgSrc: "/images/elas.png",
    },
    {
      title: "Amo meu pet",
      followers: 700,
      imgSrc: "/images/pet.png",
    },
    {
      title: "Sou opendever",
      followers: 400,
      imgSrc: "/images/pidevi.png",
    },
  ];

  const friends = [
    {
      title: "Betinho Ju",
      followers: 4231,
      imgSrc: "/images/urso.jpeg",
    },
    {
      title: "Guvvolvo",
      followers: 12,
      imgSrc: "/images/guvvolvo.png",
    },
    {
      title: "Leandra Ubuntu",
      followers: 734,
      imgSrc: "https://avatars.githubusercontent.com/u/50140771?v=4",
    },
    {
      title: "JRobsonJr",
      followers: 1257,
      imgSrc: "/images/robson.jpg",
    },
  ];

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
            <strong>
              <a
                href="https://forms.gle/65F9Ez6he511j3gB9"
                target="_blank"
                rel="noreferrer"
              >
                link do form
              </a>
            </strong>
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
      title: "Design 01 - babou bebê?",
      fixed: false,
      children: (
        <>
          <p>As camisetas são brancas e pretas heinn</p>
          <Carrossel
            imgSrcs={[
              "https://raw.githubusercontent.com/RodrigoEC/docker/master/img/whiteMemeShirt.jpg",
              "https://raw.githubusercontent.com/RodrigoEC/docker/master/img/grayBackShirt.jpg",
              "https://raw.githubusercontent.com/RodrigoEC/docker/master/img/blackMemeShirt.jpg",
              "https://raw.githubusercontent.com/RodrigoEC/docker/master/img/backBlackShirt.jpg",
            ]}
          />
          <br />
          <p>Dá uma olhadinha mais de perto no design:</p>
          <Carrossel
            imgSrcs={[
              "https://raw.githubusercontent.com/RodrigoEC/docker/master/img/whiteMeme.jpg",
              "https://raw.githubusercontent.com/RodrigoEC/docker/master/img/blackMeme.jpg",
            ]}
          />
        </>
      ),
    },
    {
      avatarSrc: "/images/robson.jpg",
      username: "JRobsonJr",
      title: "Design 02 - Sua fardinha clássica de CC!",
      fixed: false,
      children: (
        <>
          <p ref={formRef}>Uma proposta mais clássica mas nada típica</p>
          <p ref={formRef}>As camisas são brancas e pretas heein!</p>
          <Carrossel
            imgSrcs={[
              "https://raw.githubusercontent.com/RodrigoEC/docker/master/img/classWhiteShirt.jpg",
              "https://raw.githubusercontent.com/RodrigoEC/docker/master/img/grayBackShirt.jpg",
              "https://raw.githubusercontent.com/RodrigoEC/docker/master/img/classicBlackShirt.jpg",
              "https://raw.githubusercontent.com/RodrigoEC/docker/master/img/backBlackShirt.jpg",
            ]}
          />
          <br />
          <p>Dá uma olhadinha mais de perto no design:</p>
          <Carrossel
            imgSrcs={[
              "https://raw.githubusercontent.com/RodrigoEC/docker/master/img/classicWhite.jpg",
              "https://raw.githubusercontent.com/RodrigoEC/docker/master/img/classicBlack.jpg",
            ]}
          />
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
          <Divider />
          <Section title="👨‍💻 meus amigos " number={341} cards={friends} />
          <Section
            title="🤝 minhas comunidades"
            number={99}
            cards={comunidades}
          />
        </aside>
      </BodyContainer>
    </Wrapper>
  );
}

export default App;
