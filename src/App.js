import "./App.css";
import { Bio } from "./Components/Bio";
import { Header } from "./Components/Header";
import { Post } from "./Components/Post";
import "./reset.css";
import { Wrapper, BodyContainer } from "./styles";

function App() {
  const posts = [
    {
      avatarSrc: "/images/eu.gif",
      username: "Raduken27",
      title: "Design 01 - Sua fardinha clássica de CC!",
      children: (
        <>
          <p>Uma proposta mais clássica mas nada típica</p>
          <img src='/images/eu.gif'/>
        </>
      )
    },
  ];

  return (
    <Wrapper>
      <Header />
      <BodyContainer>
        <div className="cu1" />
        <div>
          <Bio />
          {
            posts.map((post) => <Post {...post}/>)
          }
        </div>
        <div className="cu2" />
      </BodyContainer>
    </Wrapper>
  );
}

export default App;
