import { useEffect, useRef } from "react";
import "./App.css";
import { Bio } from "./Components/Bio";
import { Header } from "./Components/Header";
import { NewPost } from "./Components/NewPost";
import { Post } from "./Components/Post";
import "./reset.css";
import { Wrapper, BodyContainer } from "./styles";

function App() {
  const formRef = useRef();

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
      avatarSrc: "/images/eu.gif",
      username: "Raduken27",
      title: "Design 01 - Sua fardinha clássica de CC!",
      fixed: false,
      children: (
        <>
          <p ref={formRef}>Uma proposta mais clássica mas nada típica</p>
          <img src="/images/eu.gif" alt="eu" />
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
        <div className="cu1" />
        <div>
          <Bio />
          <NewPost />
          {posts.map((post, index) => (
            <Post {...post} key={index} />
          ))}
        </div>
        <div className="cu2" />
      </BodyContainer>
    </Wrapper>
  );
}

export default App;
