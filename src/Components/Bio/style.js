import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 8px 50px 8px 8px;
  background: white;
  padding: 1rem;
  box-sizing: border-box;
  text-align: left;
  display:flex;
  flex-direction: column;
  font-size: 14px;
  color: #333;

  strong {
    font-weight: bold;
  }

  h1 {
    font-size: 24px;
    color: #333;
  }

  img {
    max-width: 250px;
  }
  i {
    font-style: italic;
  }
`;

export const Text = styled.p`
  margin-top: 1rem;
`;

export const BodyContainer = styled.div`  
  flex-grow: 1;

`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 1rem 0 0.5rem 0;

`;

export const AboutMe = styled.div

export const StatusContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;

`;

export const Warning = styled.strong`
  color: #ff4343;
  font-weight: bold;
`;

export const Notification = styled.div`
  background: #fcfdde;
  padding: 5px;
  margin: 1rem 0;

  p {
    margin-top: 0.5rem;
  }

  ul {
    list-style-type:circle;
    margin: 0.5rem 0;
    margin-left: 1.5rem;
  }
`;
