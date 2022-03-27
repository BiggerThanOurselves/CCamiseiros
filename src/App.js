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
      title: "Design 01 - babou bebê?",
      fixed: false,
      children: (
        <>
          <p>As camisetas são cinza e pretas heinn</p>
          <Carrossel
            imgSrcs={[
              "https://raw.githubusercontent.com/BiggerThanOurselves/CCamiseirosBancoImg/main/classicWhiteTshirt.jpg?token=GHSAT0AAAAAABSX2BBOXBIGPXCV3TWKYIA6YR7YZVQ",
              "https://raw.githubusercontent.com/BiggerThanOurselves/CCamiseirosBancoImg/main/blackMemeTshirt.jpg?token=GHSAT0AAAAAABSX2BBOYOGH54OJJUOJALLCYR7YW2A",
            ]}
          />
          <br />
          <p>Dá uma olhadinha mais de perto no design:</p>
          <Carrossel
            imgSrcs={[
              "https://raw.githubusercontent.com/BiggerThanOurselves/CCamiseirosBancoImg/main/whiteMeme.jpg?token=GHSAT0AAAAAABSX2BBPAVVV3E7JR3DS67BUYR7Y2KA",
              "https://raw.githubusercontent.com/BiggerThanOurselves/CCamiseirosBancoImg/main/blackMeme.jpg?token=GHSAT0AAAAAABSX2BBP2VDGNN4XZAO3AF7IYR7YWEQ",
            ]}
          />
        </>
      ),
    },
    {
      avatarSrc: "https://avatars.githubusercontent.com/u/50140771?v=4",
      username: "Leandra Ubuntu",
      title: "Design 02 - Sua fardinha clássica de CC!",
      fixed: false,
      children: (
        <>
          <p ref={formRef}>Uma proposta mais clássica mas nada típica</p>
          <p ref={formRef}>As camisas são cina e preto heein!</p>
          <Carrossel
            imgSrcs={[
              "https://raw.githubusercontent.com/BiggerThanOurselves/CCamiseirosBancoImg/main/whiteMemeTshirt.jpg?token=GHSAT0AAAAAABSX2BBPY3NUEM5ESQN67GS6YR7Y3AQ",
              "https://raw.githubusercontent.com/BiggerThanOurselves/CCamiseirosBancoImg/main/classicBlackTshirt.jpg?token=GHSAT0AAAAAABSX2BBO22ULKPMB4XK67MRAYR7YYFA",
            ]}
          />
          <br />
          <p>Dá uma olhadinha mais de perto no design:</p>
          <Carrossel
            imgSrcs={[
              "https://raw.githubusercontent.com/BiggerThanOurselves/CCamiseirosBancoImg/main/classicWhite.jpg?token=GHSAT0AAAAAABSX2BBPEHDUGQLAZGJU4SL2YR7YY2Q",
              "https://raw.githubusercontent.com/BiggerThanOurselves/CCamiseirosBancoImg/main/classicBlack.jpg?token=GHSAT0AAAAAABSX2BBOIYHPSZ4ZGMO54VSIYR7YXRA",
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
